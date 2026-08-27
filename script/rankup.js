module.exports = {
  config: {
    name: "rankup",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: rankup",
    usage: "+rankup",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +rankup received: ${text}`
      : `✅ +rankup is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
