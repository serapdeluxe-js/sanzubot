module.exports = {
  config: {
    name: "coordinates",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: coordinates",
    usage: "+coordinates",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +coordinates received: ${text}`
      : `✅ +coordinates is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
