module.exports = {
  config: {
    name: "warning",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: warning",
    usage: "+warning",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +warning received: ${text}`
      : `✅ +warning is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
