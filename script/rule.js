module.exports = {
  config: {
    name: "rule",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: rule",
    usage: "+rule",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +rule received: ${text}`
      : `✅ +rule is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
