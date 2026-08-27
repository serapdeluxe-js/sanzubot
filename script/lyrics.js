module.exports = {
  config: {
    name: "lyrics",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: lyrics",
    usage: "+lyrics",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +lyrics received: ${text}`
      : `✅ +lyrics is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
