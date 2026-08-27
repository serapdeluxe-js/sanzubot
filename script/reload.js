module.exports = {
  config: {
    name: "reload",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: reload",
    usage: "+reload",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +reload received: ${text}`
      : `✅ +reload is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
