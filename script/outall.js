module.exports = {
  config: {
    name: "outall",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: outall",
    usage: "+outall",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +outall received: ${text}`
      : `✅ +outall is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
