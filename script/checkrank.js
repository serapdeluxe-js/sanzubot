module.exports = {
  config: {
    name: "checkrank",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: checkrank",
    usage: "+checkrank",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +checkrank received: ${text}`
      : `✅ +checkrank is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
