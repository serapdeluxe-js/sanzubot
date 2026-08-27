module.exports = {
  config: {
    name: "sauce",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: sauce",
    usage: "+sauce",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +sauce received: ${text}`
      : `✅ +sauce is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
