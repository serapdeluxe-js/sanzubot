module.exports = {
  config: {
    name: "mentionall",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: mentionall",
    usage: "+mentionall",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +mentionall received: ${text}`
      : `✅ +mentionall is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
