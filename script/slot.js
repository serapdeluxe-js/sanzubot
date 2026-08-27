module.exports = {
  config: {
    name: "slot",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: slot",
    usage: "+slot",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +slot received: ${text}`
      : `✅ +slot is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
