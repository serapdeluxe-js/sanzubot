module.exports = {
  config: {
    name: "trans",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: trans",
    usage: "+trans",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +trans received: ${text}`
      : `✅ +trans is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
