module.exports = {
  config: {
    name: "note",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: note",
    usage: "+note",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +note received: ${text}`
      : `✅ +note is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
