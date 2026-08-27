module.exports = {
  config: {
    name: "mal",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: mal",
    usage: "+mal",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +mal received: ${text}`
      : `✅ +mal is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
