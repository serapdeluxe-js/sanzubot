module.exports = {
  config: {
    name: "spam",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: spam",
    usage: "+spam",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +spam received: ${text}`
      : `✅ +spam is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
