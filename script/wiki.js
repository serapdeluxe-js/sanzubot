module.exports = {
  config: {
    name: "wiki",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: wiki",
    usage: "+wiki",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +wiki received: ${text}`
      : `✅ +wiki is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
