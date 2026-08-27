module.exports = {
  config: {
    name: "uid",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: uid",
    usage: "+uid",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +uid received: ${text}`
      : `✅ +uid is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
