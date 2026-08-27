module.exports = {
  config: {
    name: "groupemoji",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: groupemoji",
    usage: "+groupemoji",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +groupemoji received: ${text}`
      : `✅ +groupemoji is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
