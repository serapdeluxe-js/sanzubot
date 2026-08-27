module.exports = {
  config: {
    name: "gagwiki",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: gagwiki",
    usage: "+gagwiki",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +gagwiki received: ${text}`
      : `✅ +gagwiki is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
