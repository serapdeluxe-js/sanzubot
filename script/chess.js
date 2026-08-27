module.exports = {
  config: {
    name: "chess",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: chess",
    usage: "+chess",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +chess received: ${text}`
      : `✅ +chess is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
