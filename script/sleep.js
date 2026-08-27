module.exports = {
  config: {
    name: "sleep",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: sleep",
    usage: "+sleep",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +sleep received: ${text}`
      : `✅ +sleep is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
