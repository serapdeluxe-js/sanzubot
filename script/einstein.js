module.exports = {
  config: {
    name: "einstein",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: einstein",
    usage: "+einstein",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +einstein received: ${text}`
      : `✅ +einstein is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
