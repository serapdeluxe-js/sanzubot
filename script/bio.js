module.exports = {
  config: {
    name: "bio",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: bio",
    usage: "+bio",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +bio received: ${text}`
      : `✅ +bio is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
