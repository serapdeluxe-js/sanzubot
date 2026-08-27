module.exports = {
  config: {
    name: "stalk-photos",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: stalk-photos",
    usage: "+stalk-photos",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +stalk-photos received: ${text}`
      : `✅ +stalk-photos is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
