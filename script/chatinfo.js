module.exports = {
  config: {
    name: "chatinfo",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: chatinfo",
    usage: "+chatinfo",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +chatinfo received: ${text}`
      : `✅ +chatinfo is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
