module.exports = {
  config: {
    name: "shop",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: shop",
    usage: "+shop",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +shop received: ${text}`
      : `✅ +shop is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
