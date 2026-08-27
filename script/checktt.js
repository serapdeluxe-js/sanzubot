module.exports = {
  config: {
    name: "checktt",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: checktt",
    usage: "+checktt",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +checktt received: ${text}`
      : `✅ +checktt is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
