module.exports = {
  config: {
    name: "redroom",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: redroom",
    usage: "+redroom",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +redroom received: ${text}`
      : `✅ +redroom is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
