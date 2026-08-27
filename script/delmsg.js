module.exports = {
  config: {
    name: "delmsg",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: delmsg",
    usage: "+delmsg",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +delmsg received: ${text}`
      : `✅ +delmsg is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
