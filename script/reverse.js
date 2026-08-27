module.exports = {
  config: {
    name: "reverse",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: reverse",
    usage: "+reverse",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +reverse received: ${text}`
      : `✅ +reverse is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
