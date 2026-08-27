module.exports = {
  config: {
    name: "stalk-liked",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: stalk-liked",
    usage: "+stalk-liked",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +stalk-liked received: ${text}`
      : `✅ +stalk-liked is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
