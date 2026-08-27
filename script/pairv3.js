module.exports = {
  config: {
    name: "pairv3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: pairv3",
    usage: "+pairv3",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +pairv3 received: ${text}`
      : `✅ +pairv3 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
