module.exports = {
  config: {
    name: "banner4",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: banner4",
    usage: "+banner4",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +banner4 received: ${text}`
      : `✅ +banner4 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
