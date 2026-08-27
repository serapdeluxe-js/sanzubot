module.exports = {
  config: {
    name: "xavier",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: xavier",
    usage: "+xavier",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +xavier received: ${text}`
      : `✅ +xavier is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
