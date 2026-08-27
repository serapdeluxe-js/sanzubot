module.exports = {
  config: {
    name: "offbot",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: offbot",
    usage: "+offbot",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +offbot received: ${text}`
      : `✅ +offbot is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
