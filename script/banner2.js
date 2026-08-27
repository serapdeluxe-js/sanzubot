module.exports = {
  config: {
    name: "banner2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: banner2",
    usage: "+banner2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +banner2 received: ${text}`
      : `✅ +banner2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
