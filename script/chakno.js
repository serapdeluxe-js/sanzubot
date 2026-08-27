module.exports = {
  config: {
    name: "chakno",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: chakno",
    usage: "+chakno",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +chakno received: ${text}`
      : `✅ +chakno is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
