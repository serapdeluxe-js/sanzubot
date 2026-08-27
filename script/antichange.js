module.exports = {
  config: {
    name: "antichange",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: antichange",
    usage: "+antichange",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +antichange received: ${text}`
      : `✅ +antichange is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
