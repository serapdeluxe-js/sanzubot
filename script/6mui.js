module.exports = {
  config: {
    name: "6mui",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: 6mui",
    usage: "+6mui",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +6mui received: ${text}`
      : `✅ +6mui is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
