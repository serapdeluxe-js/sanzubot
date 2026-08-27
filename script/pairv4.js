module.exports = {
  config: {
    name: "pairv4",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: pairv4",
    usage: "+pairv4",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +pairv4 received: ${text}`
      : `✅ +pairv4 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
