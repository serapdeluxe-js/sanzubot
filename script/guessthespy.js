module.exports = {
  config: {
    name: "guessthespy",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: guessthespy",
    usage: "+guessthespy",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +guessthespy received: ${text}`
      : `✅ +guessthespy is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
