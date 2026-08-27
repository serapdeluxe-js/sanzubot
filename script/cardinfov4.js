module.exports = {
  config: {
    name: "cardinfov4",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cardinfov4",
    usage: "+cardinfov4",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cardinfov4 received: ${text}`
      : `✅ +cardinfov4 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
