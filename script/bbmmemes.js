module.exports = {
  config: {
    name: "bbmmemes",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: bbmmemes",
    usage: "+bbmmemes",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +bbmmemes received: ${text}`
      : `✅ +bbmmemes is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
