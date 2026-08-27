module.exports = {
  config: {
    name: "girl18",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: girl18",
    usage: "+girl18",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +girl18 received: ${text}`
      : `✅ +girl18 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
