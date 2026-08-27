module.exports = {
  config: {
    name: "playvideo",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: playvideo",
    usage: "+playvideo",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +playvideo received: ${text}`
      : `✅ +playvideo is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
