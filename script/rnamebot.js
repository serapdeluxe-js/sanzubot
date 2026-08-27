module.exports = {
  config: {
    name: "rnamebot",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: rnamebot",
    usage: "+rnamebot",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +rnamebot received: ${text}`
      : `✅ +rnamebot is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
