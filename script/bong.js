module.exports = {
  config: {
    name: "bong",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: bong",
    usage: "+bong",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +bong received: ${text}`
      : `✅ +bong is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
