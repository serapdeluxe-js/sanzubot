module.exports = {
  config: {
    name: "girl2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: girl2",
    usage: "+girl2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +girl2 received: ${text}`
      : `✅ +girl2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
