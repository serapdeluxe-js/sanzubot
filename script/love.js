module.exports = {
  config: {
    name: "love",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: love",
    usage: "+love",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +love received: ${text}`
      : `✅ +love is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
