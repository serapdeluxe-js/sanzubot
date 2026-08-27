module.exports = {
  config: {
    name: "cache",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cache",
    usage: "+cache",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cache received: ${text}`
      : `✅ +cache is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
