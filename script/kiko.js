module.exports = {
  config: {
    name: "kiko",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: kiko",
    usage: "+kiko",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +kiko received: ${text}`
      : `✅ +kiko is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
