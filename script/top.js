module.exports = {
  config: {
    name: "top",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: top",
    usage: "+top",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +top received: ${text}`
      : `✅ +top is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
