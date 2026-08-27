module.exports = {
  config: {
    name: "ai-image",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: ai-image",
    usage: "+ai-image",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +ai-image received: ${text}`
      : `✅ +ai-image is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
