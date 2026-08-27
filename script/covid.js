module.exports = {
  config: {
    name: "covid",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: covid",
    usage: "+covid",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +covid received: ${text}`
      : `✅ +covid is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
