module.exports = {
  config: {
    name: "join",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: join",
    usage: "+join",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +join received: ${text}`
      : `✅ +join is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
