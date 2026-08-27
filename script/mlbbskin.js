module.exports = {
  config: {
    name: "mlbbskin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: mlbbskin",
    usage: "+mlbbskin",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +mlbbskin received: ${text}`
      : `✅ +mlbbskin is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
