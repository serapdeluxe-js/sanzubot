module.exports = {
  config: {
    name: "tweet-tag",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: tweet-tag",
    usage: "+tweet-tag",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +tweet-tag received: ${text}`
      : `✅ +tweet-tag is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
