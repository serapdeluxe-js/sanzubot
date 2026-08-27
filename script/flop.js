module.exports = {
  config: {
    name: "flop",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: flop",
    usage: "+flop",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +flop received: ${text}`
      : `✅ +flop is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
