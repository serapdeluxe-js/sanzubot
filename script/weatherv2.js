module.exports = {
  config: {
    name: "weatherv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: weatherv2",
    usage: "+weatherv2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +weatherv2 received: ${text}`
      : `✅ +weatherv2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
