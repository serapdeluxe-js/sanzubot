module.exports = {
  config: {
    name: "tik",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: tik",
    usage: "+tik",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +tik received: ${text}`
      : `✅ +tik is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
