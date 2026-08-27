module.exports = {
  config: {
    name: "drake",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: drake",
    usage: "+drake",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +drake received: ${text}`
      : `✅ +drake is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
