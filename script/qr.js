module.exports = {
  config: {
    name: "qr",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: qr",
    usage: "+qr",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +qr received: ${text}`
      : `✅ +qr is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
