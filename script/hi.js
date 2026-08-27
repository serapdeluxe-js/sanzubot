module.exports = {
  config: {
    name: "hi",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: hi",
    usage: "+hi",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +hi received: ${text}`
      : `✅ +hi is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
