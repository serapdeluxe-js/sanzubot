module.exports = {
  config: {
    name: "settings",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: settings",
    usage: "+settings",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +settings received: ${text}`
      : `✅ +settings is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
