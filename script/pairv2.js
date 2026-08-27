module.exports = {
  config: {
    name: "pairv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: pairv2",
    usage: "+pairv2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +pairv2 received: ${text}`
      : `✅ +pairv2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
