module.exports = {
  config: {
    name: "time",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: time",
    usage: "+time",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +time received: ${text}`
      : `✅ +time is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
