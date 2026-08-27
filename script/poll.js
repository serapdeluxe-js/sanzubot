module.exports = {
  config: {
    name: "poll",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: poll",
    usage: "+poll",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +poll received: ${text}`
      : `✅ +poll is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
