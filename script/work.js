module.exports = {
  config: {
    name: "work",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: work",
    usage: "+work",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +work received: ${text}`
      : `✅ +work is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
