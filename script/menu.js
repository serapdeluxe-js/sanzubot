module.exports = {
  config: {
    name: "menu",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: menu",
    usage: "+menu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +menu received: ${text}`
      : `✅ +menu is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
