module.exports = {
  config: {
    name: "request",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: request",
    usage: "+request",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +request received: ${text}`
      : `✅ +request is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
