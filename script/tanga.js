module.exports = {
  config: {
    name: "tanga",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: tanga",
    usage: "+tanga",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +tanga received: ${text}`
      : `✅ +tanga is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
