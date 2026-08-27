module.exports = {
  config: {
    name: "say",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: say",
    usage: "+say",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +say received: ${text}`
      : `✅ +say is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
