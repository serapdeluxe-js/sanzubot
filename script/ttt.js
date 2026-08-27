module.exports = {
  config: {
    name: "ttt",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: ttt",
    usage: "+ttt",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +ttt received: ${text}`
      : `✅ +ttt is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
