module.exports = {
  config: {
    name: "777vip",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: 777vip",
    usage: "+777vip",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +777vip received: ${text}`
      : `✅ +777vip is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
