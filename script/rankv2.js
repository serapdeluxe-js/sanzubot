module.exports = {
  config: {
    name: "rankv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: rankv2",
    usage: "+rankv2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +rankv2 received: ${text}`
      : `✅ +rankv2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
