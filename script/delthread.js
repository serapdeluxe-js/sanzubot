module.exports = {
  config: {
    name: "delthread",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: delthread",
    usage: "+delthread",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +delthread received: ${text}`
      : `✅ +delthread is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
