module.exports = {
  config: {
    name: "markcmt",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: markcmt",
    usage: "+markcmt",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +markcmt received: ${text}`
      : `✅ +markcmt is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
