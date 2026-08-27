module.exports = {
  config: {
    name: "ramdommmember",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: ramdommmember",
    usage: "+ramdommmember",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +ramdommmember received: ${text}`
      : `✅ +ramdommmember is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
