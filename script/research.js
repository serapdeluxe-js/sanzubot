module.exports = {
  config: {
    name: "research",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: research",
    usage: "+research",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +research received: ${text}`
      : `✅ +research is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
