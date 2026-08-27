module.exports = {
  config: {
    name: "stalk-posts",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: stalk-posts",
    usage: "+stalk-posts",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +stalk-posts received: ${text}`
      : `✅ +stalk-posts is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
