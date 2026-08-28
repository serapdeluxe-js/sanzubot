const { createCanvas, loadImage } = require("canvas");
const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
	config: {
		name: "lvltop",
		aliases: ["ranklist", "leaders"],
		version: "1.0",
		author: "Claude",
		countDown: 5,
		role: 0,
		description: {
			en: "Show the top 10 users by level/exp, red neon leaderboard style."
		},
		category: "economy",
		guide: {
			en: "{pn}"
		}
	},

	onStart: async function ({ api, event, usersData }) {
		const { threadID, messageID } = event;

		try {
			const allUsers = await usersData.getAll();

			// Rank by exp, fallback 0
			const ranked = allUsers
				.map(u => ({
					userID: u.userID,
					name: u.name || "Unknown",
					exp: u.exp || u.currentExp || 0,
					level: u.level || Math.floor(0.1 * Math.sqrt(u.exp || u.currentExp || 0)) || 1
				}))
				.sort((a, b) => b.exp - a.exp)
				.slice(0, 10);

			const cachePath = path.join(__dirname, "cache");
			await fs.ensureDir(cachePath);

			// Fetch avatars for the top 10 (small, in parallel)
			const withAvatars = await Promise.all(
				ranked.map(async (u, i) => {
					const avatarPath = path.join(cachePath, `${u.userID}_top_avatar.png`);
					try {
						const url = `https://graph.facebook.com/${u.userID}/picture?width=128&height=128&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
						const res = await axios.get(url, { responseType: "arraybuffer" });
						await fs.writeFile(avatarPath, Buffer.from(res.data, "binary"));
					} catch (e) {
						return { ...u, avatarPath: null };
					}
					return { ...u, avatarPath };
				})
			);

			const imgBuffer = await renderLeaderboard(withAvatars);
			const outPath = path.join(cachePath, `leaderboard_${Date.now()}.png`);
			await fs.writeFile(outPath, imgBuffer);

			return api.sendMessage(
				{
					body: "🏆 TOP 10 LEADERBOARD",
					attachment: fs.createReadStream(outPath)
				},
				threadID,
				() => {
					fs.unlink(outPath).catch(() => {});
					withAvatars.forEach(u => u.avatarPath && fs.unlink(u.avatarPath).catch(() => {}));
				},
				messageID
			);
		} catch (err) {
			console.error(err);
			return api.sendMessage(
				"❌ Hindi ma-generate ang leaderboard. Subukan ulit mamaya.",
				threadID,
				messageID
			);
		}
	}
};

// ---------------------------------------------------------------
// Canvas renderer: dark bg, red neon header, ranked rows with
// small circular avatars, level + exp, matching the levelup style.
// ---------------------------------------------------------------
async function renderLeaderboard(users) {
	const W = 900;
	const rowH = 70;
	const headerH = 110;
	const H = headerH + rowH * users.length + 30;

	const canvas = createCanvas(W, H);
	const ctx = canvas.getContext("2d");

	// Background
	const bgGrad = ctx.createLinearGradient(0, 0, W, H);
	bgGrad.addColorStop(0, "#1a0000");
	bgGrad.addColorStop(1, "#0a0a0a");
	ctx.fillStyle = bgGrad;
	ctx.fillRect(0, 0, W, H);

	// Border frame
	ctx.strokeStyle = "#ff1a1a";
	ctx.lineWidth = 4;
	ctx.strokeRect(6, 6, W - 12, H - 12);

	// Diagonal accents top-left
	ctx.save();
	ctx.strokeStyle = "rgba(255,0,0,0.35)";
	ctx.lineWidth = 5;
	for (let i = 0; i < 5; i++) {
		ctx.beginPath();
		ctx.moveTo(20 + i * 18, 15);
		ctx.lineTo(20 + i * 18 - 32, 50);
		ctx.stroke();
	}
	ctx.restore();

	// Header "TOP 10" neon text
	ctx.textBaseline = "middle";
	ctx.font = "bold 56px sans-serif";
	ctx.shadowColor = "#ff0000";
	ctx.shadowBlur = 22;
	ctx.fillStyle = "#ff2b2b";
	ctx.fillText("TOP 10", 50, 65);
	ctx.shadowBlur = 0;

	// Rows
	let y = headerH;
	for (let i = 0; i < users.length; i++) {
		const u = users[i];
		const rowY = y + rowH / 2;

		// alternating row bg
		if (i % 2 === 0) {
			ctx.fillStyle = "rgba(255,255,255,0.03)";
			ctx.fillRect(20, y, W - 40, rowH);
		}

		// Rank number
		ctx.font = "bold 30px sans-serif";
		ctx.fillStyle = i < 3 ? "#ff1a1a" : "#ffffff";
		ctx.textAlign = "left";
		ctx.fillText(`#${i + 1}`, 40, rowY);

		// Avatar
		const cx = 150, cyc = rowY, r = 24;
		ctx.save();
		ctx.beginPath();
		ctx.arc(cx, cyc, r + 3, 0, Math.PI * 2);
		ctx.strokeStyle = "#ff1a1a";
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(cx, cyc, r, 0, Math.PI * 2);
		ctx.closePath();
		ctx.clip();
		if (u.avatarPath) {
			try {
				const avatar = await loadImage(u.avatarPath);
				ctx.drawImage(avatar, cx - r, cyc - r, r * 2, r * 2);
			} catch (e) {
				ctx.fillStyle = "#333";
				ctx.fillRect(cx - r, cyc - r, r * 2, r * 2);
			}
		} else {
			ctx.fillStyle = "#333";
			ctx.fillRect(cx - r, cyc - r, r * 2, r * 2);
		}
		ctx.restore();

		// Name
		ctx.font = "bold 24px sans-serif";
		ctx.fillStyle = "#ffffff";
		ctx.fillText(trimText(ctx, u.name, 380), 200, rowY - 10);

		// Level + exp
		ctx.font = "18px sans-serif";
		ctx.fillStyle = "#ff5555";
		ctx.fillText(`Level ${u.level}  •  ${Math.floor(u.exp)} EXP`, 200, rowY + 16);

		y += rowH;
	}

	return canvas.toBuffer("image/png");
}

function trimText(ctx, text, maxWidth) {
	if (ctx.measureText(text).width <= maxWidth) return text;
	let t = text;
	while (ctx.measureText(t + "…").width > maxWidth && t.length > 0) {
		t = t.slice(0, -1);
	}
	return t + "…";
}
