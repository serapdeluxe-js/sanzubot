module.exports = {
  config: {
    name: "cardinfo",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cardinfo",
    usage: "+cardinfo",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cardinfo received: ${text}`
      : `✅ +cardinfo is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
