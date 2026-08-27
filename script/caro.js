module.exports = {
  config: {
    name: "caro",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: caro",
    usage: "+caro",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +caro received: ${text}`
      : `✅ +caro is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
