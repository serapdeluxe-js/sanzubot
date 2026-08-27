module.exports = {
  config: {
    name: "student",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: student",
    usage: "+student",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +student received: ${text}`
      : `✅ +student is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
