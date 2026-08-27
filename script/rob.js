module.exports = {
  config: {
    name: "rob",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: rob",
    usage: "+rob",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +rob received: ${text}`
      : `✅ +rob is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
