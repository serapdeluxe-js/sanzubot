module.exports = {
  config: {
    name: "isko",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: isko",
    usage: "+isko",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +isko received: ${text}`
      : `✅ +isko is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
