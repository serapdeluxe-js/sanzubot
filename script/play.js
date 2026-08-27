module.exports = {
  config: {
    name: "play",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: play",
    usage: "+play",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +play received: ${text}`
      : `✅ +play is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
