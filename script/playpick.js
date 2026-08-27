module.exports = {
  config: {
    name: "playpick",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: playpick",
    usage: "+playpick",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +playpick received: ${text}`
      : `✅ +playpick is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
