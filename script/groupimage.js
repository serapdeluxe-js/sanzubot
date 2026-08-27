module.exports = {
  config: {
    name: "groupimage",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: groupimage",
    usage: "+groupimage",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +groupimage received: ${text}`
      : `✅ +groupimage is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
