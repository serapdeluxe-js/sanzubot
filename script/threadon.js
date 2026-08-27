module.exports = {
  config: {
    name: "threadon",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: threadon",
    usage: "+threadon",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +threadon received: ${text}`
      : `✅ +threadon is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
