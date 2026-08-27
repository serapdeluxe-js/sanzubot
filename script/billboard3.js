module.exports = {
  config: {
    name: "billboard3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: billboard3",
    usage: "+billboard3",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +billboard3 received: ${text}`
      : `✅ +billboard3 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
