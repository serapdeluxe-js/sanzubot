module.exports = {
  config: {
    name: "leni",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: leni",
    usage: "+leni",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +leni received: ${text}`
      : `✅ +leni is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
