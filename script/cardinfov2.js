module.exports = {
  config: {
    name: "cardinfov2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cardinfov2",
    usage: "+cardinfov2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cardinfov2 received: ${text}`
      : `✅ +cardinfov2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
