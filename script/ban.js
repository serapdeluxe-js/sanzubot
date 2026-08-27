module.exports = {
  config: {
    name: "ban",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: ban",
    usage: "+ban",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +ban received: ${text}`
      : `✅ +ban is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
