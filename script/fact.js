module.exports = {
  config: {
    name: "fact",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: fact",
    usage: "+fact",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +fact received: ${text}`
      : `✅ +fact is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
