module.exports = {
  config: {
    name: "weather",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: weather",
    usage: "+weather",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +weather received: ${text}`
      : `✅ +weather is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
