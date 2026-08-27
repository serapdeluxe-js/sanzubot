module.exports = {
  config: {
    name: "stalk-tag",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: stalk-tag",
    usage: "+stalk-tag",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +stalk-tag received: ${text}`
      : `✅ +stalk-tag is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
