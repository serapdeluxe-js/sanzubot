module.exports = {
  config: {
    name: "ai",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: ai",
    usage: "+ai",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +ai received: ${text}`
      : `✅ +ai is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
