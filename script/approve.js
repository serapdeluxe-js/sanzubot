module.exports = {
  config: {
    name: "approve",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: approve",
    usage: "+approve",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +approve received: ${text}`
      : `✅ +approve is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
