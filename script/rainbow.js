module.exports = {
  config: {
    name: "rainbow",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: rainbow",
    usage: "+rainbow",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +rainbow received: ${text}`
      : `✅ +rainbow is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
