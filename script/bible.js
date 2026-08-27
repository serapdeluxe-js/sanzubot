module.exports = {
  config: {
    name: "bible",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: bible",
    usage: "+bible",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +bible received: ${text}`
      : `✅ +bible is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
