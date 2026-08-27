module.exports = {
  config: {
    name: "cardbox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cardbox",
    usage: "+cardbox",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cardbox received: ${text}`
      : `✅ +cardbox is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
