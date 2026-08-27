module.exports = {
  config: {
    name: "daily",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: daily",
    usage: "+daily",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +daily received: ${text}`
      : `✅ +daily is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
