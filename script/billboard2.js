module.exports = {
  config: {
    name: "billboard2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: billboard2",
    usage: "+billboard2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +billboard2 received: ${text}`
      : `✅ +billboard2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
