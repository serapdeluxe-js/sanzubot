module.exports = {
  config: {
    name: "thread",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: thread",
    usage: "+thread",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +thread received: ${text}`
      : `✅ +thread is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
