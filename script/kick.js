module.exports = {
  config: {
    name: "kick",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: kick",
    usage: "+kick",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +kick received: ${text}`
      : `✅ +kick is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
