module.exports = {
  config: {
    name: "mark",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: mark",
    usage: "+mark",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +mark received: ${text}`
      : `✅ +mark is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
