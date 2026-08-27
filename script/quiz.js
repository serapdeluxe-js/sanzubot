module.exports = {
  config: {
    name: "quiz",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: quiz",
    usage: "+quiz",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +quiz received: ${text}`
      : `✅ +quiz is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
