module.exports = {
  config: {
    name: "post",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: post",
    usage: "+post",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +post received: ${text}`
      : `✅ +post is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
