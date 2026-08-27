module.exports = {
  config: {
    name: "girl",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: girl",
    usage: "+girl",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +girl received: ${text}`
      : `✅ +girl is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
