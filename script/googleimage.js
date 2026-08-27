module.exports = {
  config: {
    name: "googleimage",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: googleimage",
    usage: "+googleimage",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +googleimage received: ${text}`
      : `✅ +googleimage is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
