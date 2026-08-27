module.exports = {
  config: {
    name: "config",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: config",
    usage: "+config",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +config received: ${text}`
      : `✅ +config is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
