module.exports = {
  config: {
    name: "tweet",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: tweet",
    usage: "+tweet",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +tweet received: ${text}`
      : `✅ +tweet is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
