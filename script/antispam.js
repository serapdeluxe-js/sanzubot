module.exports = {
  config: {
    name: "antispam",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: antispam",
    usage: "+antispam",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +antispam received: ${text}`
      : `✅ +antispam is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
