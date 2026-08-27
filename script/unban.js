module.exports = {
  config: {
    name: "unban",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: unban",
    usage: "+unban",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +unban received: ${text}`
      : `✅ +unban is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
