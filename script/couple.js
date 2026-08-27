module.exports = {
  config: {
    name: "couple",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: couple",
    usage: "+couple",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +couple received: ${text}`
      : `✅ +couple is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
