module.exports = {
  config: {
    name: "antiout",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: antiout",
    usage: "+antiout",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +antiout received: ${text}`
      : `✅ +antiout is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
