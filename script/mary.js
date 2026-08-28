const fs = require("fs-extra");
const path = require("path");

const DB_PATH = path.join(__dirname, "data", "couples.json");

async function loadDB() {
	await fs.ensureFile(DB_PATH);
	const raw = (await fs.readFile(DB_PATH, "utf8")).trim();
	if (!raw) return {};
	try { return JSON.parse(raw); } catch { return {}; }
}
async function saveDB(db) {
	await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
}

// pending proposals kept in memory: { targetID: { proposerID, threadID, timestamp } }
const pendingProposals = new Map();

module.exports = {
	config: {
		name: "marry",
		aliases: ["couple", "propose", "divorce"],
		version: "1.0",
		author: "Claude",
		countDown: 5,
		role: 0,
		description: {
			en: "Propose, accept, check, or end a couple pairing."
		},
		category: "fun",
		guide: {
			en: "Reply to a user's message with {pn} — propose\n{pn} accept — accept a pending proposal\n{pn} decline — decline a pending proposal\n{pn} divorce — end your current pairing\nReply to a user's message with {pn} check — check their partner"
		}
	},

	onStart: async function ({ api, event, args, usersData }) {
		const { threadID, messageID, senderID, messageReply } = event;
		const sub = (args[0] || "").toLowerCase();
		const repliedID = messageReply?.senderID || null;
		const db = await loadDB();

		// ---- ACCEPT ----
		if (sub === "accept") {
			const pending = pendingProposals.get(senderID);
			if (!pending) {
				return api.sendMessage("❌ Wala kang pending na proposal.", threadID, messageID);
			}
			if (db[senderID] || db[pending.proposerID]) {
				pendingProposals.delete(senderID);
				return api.sendMessage("❌ May kasal na ang isa sa inyo.", threadID, messageID);
			}
			db[senderID] = pending.proposerID;
			db[pending.proposerID] = senderID;
			await saveDB(db);
			pendingProposals.delete(senderID);

			const nameA = await usersData.getName(senderID);
			const nameB = await usersData.getName(pending.proposerID);
			return api.sendMessage(
				`💍 Congratulations! ${nameA} at ${nameB} ay opisyal nang magkasintahan! 🎉`,
				threadID, messageID
			);
		}

		// ---- DECLINE ----
		if (sub === "decline") {
			if (!pendingProposals.has(senderID)) {
				return api.sendMessage("❌ Wala kang pending na proposal.", threadID, messageID);
			}
			pendingProposals.delete(senderID);
			return api.sendMessage("💔 Tinanggihan ang proposal.", threadID, messageID);
		}

		// ---- DIVORCE ----
		if (sub === "divorce") {
			const partnerID = db[senderID];
			if (!partnerID) {
				return api.sendMessage("❌ Wala ka namang kasalukuyang partner.", threadID, messageID);
			}
			delete db[senderID];
			delete db[partnerID];
			await saveDB(db);
			const nameA = await usersData.getName(senderID);
			return api.sendMessage(`💔 Naghiwalay na sina ${nameA} at ang partner nila.`, threadID, messageID);
		}

		// ---- CHECK ----
		if (sub === "check") {
			const targetID = repliedID || senderID;
			const partnerID = db[targetID];
			const targetName = await usersData.getName(targetID);
			if (!partnerID) {
				return api.sendMessage(`💔 Si ${targetName} ay walang partner ngayon.`, threadID, messageID);
			}
			const partnerName = await usersData.getName(partnerID);
			return api.sendMessage(`💑 Si ${targetName} ay kasal kay ${partnerName}.`, threadID, messageID);
		}

		// ---- PROPOSE (default when the command is a reply to someone's message) ----
		const targetID = repliedID;
		if (!targetID) {
			return api.sendMessage(
				"ℹ️ Gamitin: i-reply ang message ng gusto mong i-propose gamit ang \"marry\", marry accept, marry decline, marry divorce, o i-reply ang message nila gamit ang \"marry check\"",
				threadID, messageID
			);
		}
		if (targetID === senderID) {
			return api.sendMessage("❌ Hindi ka pwedeng mag-propose sa sarili mo. 😅", threadID, messageID);
		}
		if (db[senderID]) {
			return api.sendMessage("❌ May partner ka na. Mag-divorce muna kung gusto mong lumipat. 💔", threadID, messageID);
		}
		if (db[targetID]) {
			return api.sendMessage("❌ May partner na ang taong ito.", threadID, messageID);
		}

		pendingProposals.set(targetID, { proposerID: senderID, threadID, timestamp: Date.now() });
		const nameA = await usersData.getName(senderID);
		const nameB = await usersData.getName(targetID);
		return api.sendMessage(
			`💌 ${nameA} proposed to ${nameB}!\n${nameB}, gamitin ang "marry accept" o "marry decline" para sumagot.`,
			threadID, messageID
		);
	}
};
