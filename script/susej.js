module.exports = {
  config: {
    name: "susej",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: susej",
    usage: "+susej",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +susej received: ${text}`
      : `✅ +susej is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
