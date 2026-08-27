module.exports = {
  config: {
    name: "autoreset",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: autoreset",
    usage: "+autoreset",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +autoreset received: ${text}`
      : `✅ +autoreset is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
