module.exports = {
  config: {
    name: "colorgame",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: colorgame",
    usage: "+colorgame",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +colorgame received: ${text}`
      : `✅ +colorgame is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
