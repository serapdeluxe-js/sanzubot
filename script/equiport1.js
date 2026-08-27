module.exports = {
  config: {
    name: "equiport1",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: equiport1",
    usage: "+equiport1",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +equiport1 received: ${text}`
      : `✅ +equiport1 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
