module.exports = {
  config: {
    name: "giveaway",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: giveaway",
    usage: "+giveaway",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +giveaway received: ${text}`
      : `✅ +giveaway is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
