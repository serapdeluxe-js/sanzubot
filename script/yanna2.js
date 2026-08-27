module.exports = {
  config: {
    name: "yanna2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: yanna2",
    usage: "+yanna2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +yanna2 received: ${text}`
      : `✅ +yanna2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
