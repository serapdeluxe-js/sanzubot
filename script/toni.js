module.exports = {
  config: {
    name: "toni",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: toni",
    usage: "+toni",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +toni received: ${text}`
      : `✅ +toni is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
