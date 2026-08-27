module.exports = {
  config: {
    name: "iss",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: iss",
    usage: "+iss",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +iss received: ${text}`
      : `✅ +iss is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
