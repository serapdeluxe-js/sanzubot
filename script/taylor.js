module.exports = {
  config: {
    name: "taylor",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: taylor",
    usage: "+taylor",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +taylor received: ${text}`
      : `✅ +taylor is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
