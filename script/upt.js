module.exports = {
  config: {
    name: "upt",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: upt",
    usage: "+upt",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +upt received: ${text}`
      : `✅ +upt is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
