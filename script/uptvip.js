module.exports = {
  config: {
    name: "uptvip",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: uptvip",
    usage: "+uptvip",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +uptvip received: ${text}`
      : `✅ +uptvip is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
