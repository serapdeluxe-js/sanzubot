module.exports = {
  config: {
    name: "antijoin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: antijoin",
    usage: "+antijoin",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +antijoin received: ${text}`
      : `✅ +antijoin is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
