module.exports = {
  config: {
    name: "morse",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: morse",
    usage: "+morse",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +morse received: ${text}`
      : `✅ +morse is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
