module.exports = {
  config: {
    name: "all",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: all",
    usage: "+all",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +all received: ${text}`
      : `✅ +all is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
