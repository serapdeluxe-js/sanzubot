module.exports = {
  config: {
    name: "cardinfov7",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cardinfov7",
    usage: "+cardinfov7",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cardinfov7 received: ${text}`
      : `✅ +cardinfov7 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
