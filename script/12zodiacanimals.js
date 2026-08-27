module.exports = {
  config: {
    name: "12zodiacanimals",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: 12zodiacanimals",
    usage: "+12zodiacanimals",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +12zodiacanimals received: ${text}`
      : `✅ +12zodiacanimals is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
