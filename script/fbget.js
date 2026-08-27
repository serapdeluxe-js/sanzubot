module.exports = {
  config: {
    name: "fbget",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: fbget",
    usage: "+fbget",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +fbget received: ${text}`
      : `✅ +fbget is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
