module.exports = {
  config: {
    name: "tiki",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: tiki",
    usage: "+tiki",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +tiki received: ${text}`
      : `✅ +tiki is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
