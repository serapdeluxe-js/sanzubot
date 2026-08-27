module.exports = {
  config: {
    name: "cardcute",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cardcute",
    usage: "+cardcute",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cardcute received: ${text}`
      : `✅ +cardcute is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
