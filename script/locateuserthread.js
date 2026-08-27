module.exports = {
  config: {
    name: "locateuserthread",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: locateuserthread",
    usage: "+locateuserthread",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +locateuserthread received: ${text}`
      : `✅ +locateuserthread is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
