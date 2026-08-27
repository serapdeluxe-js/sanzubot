module.exports = {
  config: {
    name: "fancytext",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: fancytext",
    usage: "+fancytext",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +fancytext received: ${text}`
      : `✅ +fancytext is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
