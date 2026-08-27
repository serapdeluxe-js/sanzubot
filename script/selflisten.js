module.exports = {
  config: {
    name: "selflisten",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: selflisten",
    usage: "+selflisten",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +selflisten received: ${text}`
      : `✅ +selflisten is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
