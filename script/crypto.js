module.exports = {
  config: {
    name: "crypto",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: crypto",
    usage: "+crypto",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +crypto received: ${text}`
      : `✅ +crypto is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
