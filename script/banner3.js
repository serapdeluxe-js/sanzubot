module.exports = {
  config: {
    name: "banner3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: banner3",
    usage: "+banner3",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +banner3 received: ${text}`
      : `✅ +banner3 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
