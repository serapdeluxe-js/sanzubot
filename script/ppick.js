module.exports = {
  config: {
    name: "ppick",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: ppick",
    usage: "+ppick",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +ppick received: ${text}`
      : `✅ +ppick is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
