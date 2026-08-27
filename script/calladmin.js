module.exports = {
  config: {
    name: "calladmin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: calladmin",
    usage: "+calladmin",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +calladmin received: ${text}`
      : `✅ +calladmin is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
