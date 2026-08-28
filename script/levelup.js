const { createCanvas, loadImage, registerFont } = require("canvas");
const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
	config: {
		name: "levelup",
		aliases: ["rank", "level"],
		version: "1.0",
		author: "Claude",
		countDown: 5,
		role: 0,
		description: {
			en: "Show your (or a tagged user's) level card, red neon 'LEVEL UP' style."
		},
		category: "economy",
		guide: {
			en: "{pn}\n{pn} @mention\n{pn} <uid>"
		}
	},

	onStart: async function ({ api, event, args, usersData }) {
		const { threadID, messageID, senderID, mentions } = event;

		// Figure out target: mentioned user > uid arg > sender
		let targetID = senderID;
		if (Object.keys(mentions || {}).length > 0) {
			targetID = Object.keys(mentions)[0];
		} else if (args[0] && /^\d+$/.test(args[0])) {
			targetID = args[0];
		}

		try {
			// ---- Pull / init user data (works with GoatBot's usersData) ----
			let userData = await usersData.get(targetID);
			if (!userData) userData = {};
			const exp = userData.exp || userData.currentExp || 0;
			const level = userData.level || Math.floor(0.1 * Math.sqrt(exp)) || 1;

			// Simple level curve: exp needed for next level
			const expForLevel = (lvl) => Math.pow(lvl / 0.1, 2);
			const currentLevelExp = expForLevel(level);
			const nextLevelExp = expForLevel(level + 1);
			const progress = Math.max(
				0,
				Math.min(1, (exp - currentLevelExp) / (nextLevelExp - currentLevelExp))
			);

			const userName = await usersData.getName(targetID);
			const avatarUrl = `https://graph.facebook.com/${targetID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;

			const cachePath = path.join(__dirname, "cache");
			await fs.ensureDir(cachePath);
			const avatarPath = path.join(cachePath, `${targetID}_avatar.png`);

			const res = await axios.get(avatarUrl, { responseType: "arraybuffer" });
			await fs.writeFile(avatarPath, Buffer.from(res.data, "binary"));

			const imgBuffer = await renderLevelCard({
				avatarPath,
				userName,
				level,
				progress,
				exp: Math.floor(exp)
			});

			const outPath = path.join(cachePath, `${targetID}_levelcard.png`);
			await fs.writeFile(outPath, imgBuffer);

			return api.sendMessage(
				{
					body: `⚡ ${userName} — Level ${level}`,
					attachment: fs.createReadStream(outPath)
				},
				threadID,
				() => fs.unlink(outPath).catch(() => {}),
				messageID
			);
		} catch (err) {
			console.error(err);
			return api.sendMessage(
				"❌ Hindi ma-generate ang level card. Subukan ulit mamaya.",
				threadID,
				messageID
			);
		}
	}
};

// ---------------------------------------------------------------
// Canvas renderer: dark bg, red neon "LEVEL UP" text, red-ringed
// circular avatar on the right, angled accent shapes, progress bar.
// ---------------------------------------------------------------
async function renderLevelCard({ avatarPath, userName, level, progress, exp }) {
	const W = 900, H = 300;
	const canvas = createCanvas(W, H);
	const ctx = canvas.getContext("2d");

	// Background
	const bgGrad = ctx.createLinearGradient(0, 0, W, H);
	bgGrad.addColorStop(0, "#1a0000");
	bgGrad.addColorStop(1, "#0a0a0a");
	ctx.fillStyle = bgGrad;
	ctx.fillRect(0, 0, W, H);

	// Diagonal accent stripes (top-left, like reference image)
	ctx.save();
	ctx.strokeStyle = "rgba(255,0,0,0.35)";
	ctx.lineWidth = 6;
	for (let i = 0; i < 5; i++) {
		ctx.beginPath();
		ctx.moveTo(20 + i * 22, 20);
		ctx.lineTo(20 + i * 22 - 40, 60);
		ctx.stroke();
	}
	ctx.restore();

	// Border frame
	ctx.strokeStyle = "#ff1a1a";
	ctx.lineWidth = 4;
	ctx.strokeRect(6, 6, W - 12, H - 12);

	// "LEVEL UP" neon text
	ctx.textBaseline = "middle";
	ctx.font = "bold 72px sans-serif";
	ctx.textAlign = "left";
	const textX = 60, textY = 110;

	// glow layers
	ctx.shadowColor = "#ff0000";
	ctx.shadowBlur = 25;
	ctx.fillStyle = "#ff2b2b";
	ctx.fillText("LEVEL UP", textX, textY);
	ctx.shadowBlur = 12;
	ctx.fillStyle = "#ffffff";
	ctx.globalAlpha = 0.15;
	ctx.fillText("LEVEL UP", textX, textY);
	ctx.globalAlpha = 1;
	ctx.shadowBlur = 0;

	// Username + level line
	ctx.font = "bold 30px sans-serif";
	ctx.fillStyle = "#ffffff";
	ctx.fillText(trimText(ctx, userName, 480), textX, 170);

	ctx.font = "24px sans-serif";
	ctx.fillStyle = "#ff5555";
	ctx.fillText(`Level ${level}  •  ${exp} EXP`, textX, 210);

	// Progress bar
	const barX = textX, barY = 240, barW = 480, barH = 20;
	ctx.fillStyle = "#2a0a0a";
	roundRect(ctx, barX, barY, barW, barH, 10);
	ctx.fill();
	ctx.fillStyle = "#ff1a1a";
	roundRect(ctx, barX, barY, Math.max(10, barW * progress), barH, 10);
	ctx.fill();
	ctx.strokeStyle = "#ffffff33";
	ctx.lineWidth = 1;
	roundRect(ctx, barX, barY, barW, barH, 10);
	ctx.stroke();

	// Avatar (right side, red ring, like reference)
	const cx = W - 150, cy = H / 2, r = 90;
	ctx.save();
	// outer glow ring
	ctx.beginPath();
	ctx.arc(cx, cy, r + 10, 0, Math.PI * 2);
	ctx.strokeStyle = "#ff1a1a";
	ctx.lineWidth = 6;
	ctx.shadowColor = "#ff0000";
	ctx.shadowBlur = 20;
	ctx.stroke();
	ctx.shadowBlur = 0;

	// clip circle for avatar
	ctx.beginPath();
	ctx.arc(cx, cy, r, 0, Math.PI * 2);
	ctx.closePath();
	ctx.clip();

	const avatar = await loadImage(avatarPath);
	ctx.drawImage(avatar, cx - r, cy - r, r * 2, r * 2);
	ctx.restore();

	return canvas.toBuffer("image/png");
}

function roundRect(ctx, x, y, w, h, r) {
	ctx.beginPath();
	ctx.moveTo(x + r, y);
	ctx.arcTo(x + w, y, x + w, y + h, r);
	ctx.arcTo(x + w, y + h, x, y + h, r);
	ctx.arcTo(x, y + h, x, y, r);
	ctx.arcTo(x, y, x + w, y, r);
	ctx.closePath();
}

function trimText(ctx, text, maxWidth) {
	if (ctx.measureText(text).width <= maxWidth) return text;
	let t = text;
	while (ctx.measureText(t + "…").width > maxWidth && t.length > 0) {
		t = t.slice(0, -1);
	}
	return t + "…";
}
