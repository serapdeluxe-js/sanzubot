module.exports = {
  config: {
    name: "hug",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: hug",
    usage: "+hug",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +hug received: ${text}`
      : `✅ +hug is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
