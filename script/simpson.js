module.exports = {
  config: {
    name: "simpson",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: simpson",
    usage: "+simpson",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +simpson received: ${text}`
      : `✅ +simpson is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
