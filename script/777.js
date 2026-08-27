module.exports = {
  config: {
    name: "777",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: 777",
    usage: "+777",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +777 received: ${text}`
      : `✅ +777 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
