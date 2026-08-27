module.exports = {
  config: {
    name: "cheems",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cheems",
    usage: "+cheems",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cheems received: ${text}`
      : `✅ +cheems is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
