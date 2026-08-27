module.exports = {
  config: {
    name: "tulfo",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: tulfo",
    usage: "+tulfo",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +tulfo received: ${text}`
      : `✅ +tulfo is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
