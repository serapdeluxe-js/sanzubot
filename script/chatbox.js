module.exports = {
  config: {
    name: "chatbox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: chatbox",
    usage: "+chatbox",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +chatbox received: ${text}`
      : `✅ +chatbox is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
