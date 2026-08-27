module.exports = {
  config: {
    name: "pingv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: pingv2",
    usage: "+pingv2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +pingv2 received: ${text}`
      : `✅ +pingv2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
