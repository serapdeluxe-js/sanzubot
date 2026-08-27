module.exports = {
  config: {
    name: "status",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: status",
    usage: "+status",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +status received: ${text}`
      : `✅ +status is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
