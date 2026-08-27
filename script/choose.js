module.exports = {
  config: {
    name: "choose",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: choose",
    usage: "+choose",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +choose received: ${text}`
      : `✅ +choose is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
