module.exports = {
  config: {
    name: "3card",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: 3card",
    usage: "+3card",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +3card received: ${text}`
      : `✅ +3card is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
