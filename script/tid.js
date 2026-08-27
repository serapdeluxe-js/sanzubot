module.exports = {
  config: {
    name: "tid",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: tid",
    usage: "+tid",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +tid received: ${text}`
      : `✅ +tid is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
