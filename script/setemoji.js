module.exports = {
  config: {
    name: "setemoji",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: setemoji",
    usage: "+setemoji",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +setemoji received: ${text}`
      : `✅ +setemoji is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
