module.exports = {
  config: {
    name: "listen",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: listen",
    usage: "+listen",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +listen received: ${text}`
      : `✅ +listen is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
