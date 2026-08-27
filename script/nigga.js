module.exports = {
  config: {
    name: "nigga",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: nigga",
    usage: "+nigga",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +nigga received: ${text}`
      : `✅ +nigga is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
