module.exports = {
  config: {
    name: "japan",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: japan",
    usage: "+japan",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +japan received: ${text}`
      : `✅ +japan is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
