module.exports = {
  config: {
    name: "wattpad",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: wattpad",
    usage: "+wattpad",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +wattpad received: ${text}`
      : `✅ +wattpad is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
