const { createCanvas, loadImage } = require("canvas");
const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

// Public, bot-friendly anime image APIs (no key needed, made for redistribution)
const SOURCES = {
	sfw: "https://api.waifu.pics/sfw/waifu",
	neko: "https://api.waifu.pics/sfw/neko",
	pfp: "https://api.waifu.pics/sfw/pat" // fallback categories if you want variety
};

module.exports = {
	config: {
		name: "animecard",
		aliases: ["acover", "pfpcard"],
		version: "1.0",
		author: "Claude",
		countDown: 5,
		role: 0,
		description: {
			en: "Generate a framed anime pfp with the bot's red neon cover style."
		},
		category: "fun",
		guide: {
			en: "{pn}\n{pn} neko"
		}
	},

	onStart: async function ({ api, event, args }) {
		const { threadID, messageID } = event;

		try {
			const category = args[0] && SOURCES[args[0].toLowerCase()]
				? args[0].toLowerCase()
				: "sfw";
			const apiUrl = SOURCES[category];

			const { data } = await axios.get(apiUrl);
			const imageUrl = data.url;

			const cachePath = path.join(__dirname, "cache");
			await fs.ensureDir(cachePath);
			const rawPath = path.join(cachePath, `anime_raw_${Date.now()}.png`);

			const imgRes = await axios.get(imageUrl, { responseType: "arraybuffer" });
			await fs.writeFile(rawPath, Buffer.from(imgRes.data, "binary"));

			const framedBuffer = await renderAnimeCover(rawPath);
			const outPath = path.join(cachePath, `anime_cover_${Date.now()}.png`);
			await fs.writeFile(outPath, framedBuffer);

			return api.sendMessage(
				{
					body: "🎴 Here's your anime pfp!",
					attachment: fs.createReadStream(outPath)
				},
				threadID,
				() => {
					fs.unlink(outPath).catch(() => {});
					fs.unlink(rawPath).catch(() => {});
				},
				messageID
			);
		} catch (err) {
			console.error(err);
			return api.sendMessage(
				"❌ Hindi ma-generate ang anime pfp. Subukan ulit mamaya.",
				threadID,
				messageID
			);
		}
	}
};

// ---------------------------------------------------------------
// Canvas renderer: square crop of the source image, red neon
// border, corner accents, small "BOT" watermark badge — same
// family look as the levelup/top cards.
// ---------------------------------------------------------------
async function renderAnimeCover(imagePath) {
	const SIZE = 720;
	const canvas = createCanvas(SIZE, SIZE);
	const ctx = canvas.getContext("2d");

	// Background fallback (in case source image has transparency)
	ctx.fillStyle = "#0a0a0a";
	ctx.fillRect(0, 0, SIZE, SIZE);

	const img = await loadImage(imagePath);

	// Cover-fit crop (fill square, keep aspect ratio, center-crop)
	const scale = Math.max(SIZE / img.width, SIZE / img.height);
	const dw = img.width * scale;
	const dh = img.height * scale;
	const dx = (SIZE - dw) / 2;
	const dy = (SIZE - dh) / 2;
	ctx.drawImage(img, dx, dy, dw, dh);

	// Dark vignette bottom for text/badge legibility
	const grad = ctx.createLinearGradient(0, SIZE * 0.65, 0, SIZE);
	grad.addColorStop(0, "rgba(0,0,0,0)");
	grad.addColorStop(1, "rgba(0,0,0,0.75)");
	ctx.fillStyle = grad;
	ctx.fillRect(0, SIZE * 0.65, SIZE, SIZE * 0.35);

	// Outer neon border
	ctx.strokeStyle = "#ff1a1a";
	ctx.lineWidth = 10;
	ctx.shadowColor = "#ff0000";
	ctx.shadowBlur = 25;
	ctx.strokeRect(10, 10, SIZE - 20, SIZE - 20);
	ctx.shadowBlur = 0;

	// Corner accent brackets (top-left / bottom-right, like reference)
	drawCornerBracket(ctx, 20, 20, 60, 1, 1);
	drawCornerBracket(ctx, SIZE - 20, SIZE - 20, 60, -1, -1);

	// "BOT" watermark badge, bottom-left
	ctx.font = "bold 26px sans-serif";
	ctx.fillStyle = "#ffffff";
	ctx.shadowColor = "#000000";
	ctx.shadowBlur = 6;
	ctx.textAlign = "left";
	ctx.fillText("BOT MOD", 30, SIZE - 30);
	ctx.shadowBlur = 0;

	// Thin diagonal red accents top-right
	ctx.strokeStyle = "rgba(255,0,0,0.5)";
	ctx.lineWidth = 4;
	for (let i = 0; i < 4; i++) {
		ctx.beginPath();
		ctx.moveTo(SIZE - 30 - i * 16, 30);
		ctx.lineTo(SIZE - 30 - i * 16 + 26, 60);
		ctx.stroke();
	}

	return canvas.toBuffer("image/png");
}

function drawCornerBracket(ctx, x, y, len, dirX, dirY) {
	ctx.strokeStyle = "#ff3333";
	ctx.lineWidth = 5;
	ctx.beginPath();
	ctx.moveTo(x, y + len * dirY);
	ctx.lineTo(x, y);
	ctx.lineTo(x + len * dirX, y);
	ctx.stroke();
}
