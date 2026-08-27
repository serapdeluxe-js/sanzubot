module.exports = {
  config: {
    name: "banner5",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: banner5",
    usage: "+banner5",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +banner5 received: ${text}`
      : `✅ +banner5 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
