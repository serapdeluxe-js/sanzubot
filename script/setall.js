module.exports = {
  config: {
    name: "setall",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: setall",
    usage: "+setall",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +setall received: ${text}`
      : `✅ +setall is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
