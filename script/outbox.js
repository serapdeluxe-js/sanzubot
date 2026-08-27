module.exports = {
  config: {
    name: "outbox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: outbox",
    usage: "+outbox",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +outbox received: ${text}`
      : `✅ +outbox is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
