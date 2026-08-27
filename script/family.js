module.exports = {
  config: {
    name: "family",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: family",
    usage: "+family",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +family received: ${text}`
      : `✅ +family is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
