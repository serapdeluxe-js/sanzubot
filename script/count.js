module.exports = {
  config: {
    name: "count",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: count",
    usage: "+count",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +count received: ${text}`
      : `✅ +count is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
