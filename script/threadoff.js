module.exports = {
  config: {
    name: "threadoff",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: threadoff",
    usage: "+threadoff",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +threadoff received: ${text}`
      : `✅ +threadoff is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
