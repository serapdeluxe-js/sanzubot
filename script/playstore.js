module.exports = {
  config: {
    name: "playstore",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: playstore",
    usage: "+playstore",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +playstore received: ${text}`
      : `✅ +playstore is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
