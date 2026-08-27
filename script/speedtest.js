module.exports = {
  config: {
    name: "speedtest",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: speedtest",
    usage: "+speedtest",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +speedtest received: ${text}`
      : `✅ +speedtest is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
