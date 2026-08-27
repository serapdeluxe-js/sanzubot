module.exports = {
  config: {
    name: "github",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: github",
    usage: "+github",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +github received: ${text}`
      : `✅ +github is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
