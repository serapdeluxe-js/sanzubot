module.exports = {
  config: {
    name: "pickuplines",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: pickuplines",
    usage: "+pickuplines",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +pickuplines received: ${text}`
      : `✅ +pickuplines is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
