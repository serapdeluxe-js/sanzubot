module.exports = {
  config: {
    name: "blockuser",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: blockuser",
    usage: "+blockuser",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +blockuser received: ${text}`
      : `✅ +blockuser is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
