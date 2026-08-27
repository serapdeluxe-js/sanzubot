module.exports = {
  config: {
    name: "language",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: language",
    usage: "+language",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +language received: ${text}`
      : `✅ +language is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
