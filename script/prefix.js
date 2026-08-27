module.exports = {
  config: {
    name: "prefix",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: prefix",
    usage: "+prefix",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +prefix received: ${text}`
      : `✅ +prefix is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
