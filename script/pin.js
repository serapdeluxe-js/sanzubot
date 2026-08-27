module.exports = {
  config: {
    name: "pin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: pin",
    usage: "+pin",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +pin received: ${text}`
      : `✅ +pin is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
