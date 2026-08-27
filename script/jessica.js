module.exports = {
  config: {
    name: "jessica",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: jessica",
    usage: "+jessica",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +jessica received: ${text}`
      : `✅ +jessica is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
