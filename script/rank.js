module.exports = {
  config: {
    name: "rank",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: rank",
    usage: "+rank",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +rank received: ${text}`
      : `✅ +rank is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
