module.exports = {
  config: {
    name: "cardinfo-tag",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cardinfo-tag",
    usage: "+cardinfo-tag",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cardinfo-tag received: ${text}`
      : `✅ +cardinfo-tag is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
