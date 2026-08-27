module.exports = {
  config: {
    name: "minion",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: minion",
    usage: "+minion",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +minion received: ${text}`
      : `✅ +minion is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
