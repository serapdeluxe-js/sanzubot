module.exports = {
  config: {
    name: "boy",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: boy",
    usage: "+boy",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +boy received: ${text}`
      : `✅ +boy is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
