module.exports = {
  config: {
    name: "malnews",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: malnews",
    usage: "+malnews",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +malnews received: ${text}`
      : `✅ +malnews is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
