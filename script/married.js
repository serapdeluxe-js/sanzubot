module.exports = {
  config: {
    name: "married",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: married",
    usage: "+married",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +married received: ${text}`
      : `✅ +married is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
