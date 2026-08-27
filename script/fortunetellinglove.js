module.exports = {
  config: {
    name: "fortunetellinglove",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: fortunetellinglove",
    usage: "+fortunetellinglove",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +fortunetellinglove received: ${text}`
      : `✅ +fortunetellinglove is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
