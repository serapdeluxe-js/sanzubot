module.exports = {
  config: {
    name: "movie",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: movie",
    usage: "+movie",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +movie received: ${text}`
      : `✅ +movie is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
