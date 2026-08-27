module.exports = {
  config: {
    name: "billboard",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: billboard",
    usage: "+billboard",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +billboard received: ${text}`
      : `✅ +billboard is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
