module.exports = {
  config: {
    name: "taixiu",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: taixiu",
    usage: "+taixiu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +taixiu received: ${text}`
      : `✅ +taixiu is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
