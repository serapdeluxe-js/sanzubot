module.exports = {
  config: {
    name: "resetmoney",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: resetmoney",
    usage: "+resetmoney",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +resetmoney received: ${text}`
      : `✅ +resetmoney is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
