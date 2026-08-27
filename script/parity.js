module.exports = {
  config: {
    name: "parity",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: parity",
    usage: "+parity",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +parity received: ${text}`
      : `✅ +parity is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
