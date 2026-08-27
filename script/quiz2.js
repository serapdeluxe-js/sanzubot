module.exports = {
  config: {
    name: "quiz2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: quiz2",
    usage: "+quiz2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +quiz2 received: ${text}`
      : `✅ +quiz2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
