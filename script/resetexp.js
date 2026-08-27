module.exports = {
  config: {
    name: "resetexp",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: resetexp",
    usage: "+resetexp",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +resetexp received: ${text}`
      : `✅ +resetexp is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
