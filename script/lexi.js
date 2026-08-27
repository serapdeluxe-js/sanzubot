module.exports = {
  config: {
    name: "lexi",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: lexi",
    usage: "+lexi",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +lexi received: ${text}`
      : `✅ +lexi is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
