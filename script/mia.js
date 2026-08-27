module.exports = {
  config: {
    name: "mia",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: mia",
    usage: "+mia",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +mia received: ${text}`
      : `✅ +mia is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
