module.exports = {
  config: {
    name: "rankv3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: rankv3",
    usage: "+rankv3",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +rankv3 received: ${text}`
      : `✅ +rankv3 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
