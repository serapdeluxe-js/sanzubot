module.exports = {
  config: {
    name: "cardinfov3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cardinfov3",
    usage: "+cardinfov3",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cardinfov3 received: ${text}`
      : `✅ +cardinfov3 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
