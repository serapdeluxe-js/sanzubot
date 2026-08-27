module.exports = {
  config: {
    name: "cardinfov6",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cardinfov6",
    usage: "+cardinfov6",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cardinfov6 received: ${text}`
      : `✅ +cardinfov6 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
