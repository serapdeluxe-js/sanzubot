module.exports = {
  config: {
    name: "equiport2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: equiport2",
    usage: "+equiport2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +equiport2 received: ${text}`
      : `✅ +equiport2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
