module.exports = {
  config: {
    name: "history",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: history",
    usage: "+history",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +history received: ${text}`
      : `✅ +history is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
