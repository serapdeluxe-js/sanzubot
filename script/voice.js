module.exports = {
  config: {
    name: "voice",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: voice",
    usage: "+voice",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +voice received: ${text}`
      : `✅ +voice is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
