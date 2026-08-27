module.exports = {
  config: {
    name: "baybayin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: baybayin",
    usage: "+baybayin",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +baybayin received: ${text}`
      : `✅ +baybayin is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
