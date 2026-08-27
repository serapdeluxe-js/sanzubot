module.exports = {
  config: {
    name: "cardid",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cardid",
    usage: "+cardid",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cardid received: ${text}`
      : `✅ +cardid is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
