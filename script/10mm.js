module.exports = {
  config: {
    name: "10mm",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: 10mm",
    usage: "+10mm",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +10mm received: ${text}`
      : `✅ +10mm is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
