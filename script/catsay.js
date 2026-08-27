module.exports = {
  config: {
    name: "catsay",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: catsay",
    usage: "+catsay",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +catsay received: ${text}`
      : `✅ +catsay is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
