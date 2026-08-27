module.exports = {
  config: {
    name: "rankgif",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: rankgif",
    usage: "+rankgif",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +rankgif received: ${text}`
      : `✅ +rankgif is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
