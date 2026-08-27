module.exports = {
  config: {
    name: "pinterest",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: pinterest",
    usage: "+pinterest",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +pinterest received: ${text}`
      : `✅ +pinterest is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
