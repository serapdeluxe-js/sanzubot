module.exports = {
  config: {
    name: "steal",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: steal",
    usage: "+steal",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +steal received: ${text}`
      : `✅ +steal is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
