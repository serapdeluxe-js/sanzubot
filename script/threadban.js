module.exports = {
  config: {
    name: "threadban",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: threadban",
    usage: "+threadban",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +threadban received: ${text}`
      : `✅ +threadban is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
