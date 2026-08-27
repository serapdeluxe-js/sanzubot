module.exports = {
  config: {
    name: "cardinfov5",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cardinfov5",
    usage: "+cardinfov5",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cardinfov5 received: ${text}`
      : `✅ +cardinfov5 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
