module.exports = {
  config: {
    name: "log",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: log",
    usage: "+log",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +log received: ${text}`
      : `✅ +log is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
