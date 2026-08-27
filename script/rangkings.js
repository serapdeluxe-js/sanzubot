module.exports = {
  config: {
    name: "rangkings",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: rangkings",
    usage: "+rangkings",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +rangkings received: ${text}`
      : `✅ +rangkings is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
