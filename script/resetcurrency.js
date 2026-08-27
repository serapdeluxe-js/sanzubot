module.exports = {
  config: {
    name: "resetcurrency",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: resetcurrency",
    usage: "+resetcurrency",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +resetcurrency received: ${text}`
      : `✅ +resetcurrency is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
