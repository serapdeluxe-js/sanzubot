module.exports = {
  config: {
    name: "onbot",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: onbot",
    usage: "+onbot",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +onbot received: ${text}`
      : `✅ +onbot is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
