module.exports = {
  config: {
    name: "dictionary",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: dictionary",
    usage: "+dictionary",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +dictionary received: ${text}`
      : `✅ +dictionary is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
