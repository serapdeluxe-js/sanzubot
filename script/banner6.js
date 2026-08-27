module.exports = {
  config: {
    name: "banner6",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: banner6",
    usage: "+banner6",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +banner6 received: ${text}`
      : `✅ +banner6 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
