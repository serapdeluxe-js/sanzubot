module.exports = {
  config: {
    name: "abs",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: abs",
    usage: "+abs",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +abs received: ${text}`
      : `✅ +abs is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
