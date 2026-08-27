module.exports = {
  config: {
    name: "shunteach",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: shunteach",
    usage: "+shunteach",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +shunteach received: ${text}`
      : `✅ +shunteach is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
