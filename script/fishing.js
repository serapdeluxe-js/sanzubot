module.exports = {
  config: {
    name: "fishing",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: fishing",
    usage: "+fishing",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +fishing received: ${text}`
      : `✅ +fishing is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
