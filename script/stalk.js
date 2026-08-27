module.exports = {
  config: {
    name: "stalk",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: stalk",
    usage: "+stalk",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +stalk received: ${text}`
      : `✅ +stalk is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
