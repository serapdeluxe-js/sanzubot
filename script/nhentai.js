module.exports = {
  config: {
    name: "nhentai",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: nhentai",
    usage: "+nhentai",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +nhentai received: ${text}`
      : `✅ +nhentai is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
