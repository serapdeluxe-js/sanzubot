module.exports = {
  config: {
    name: "list",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: list",
    usage: "+list",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +list received: ${text}`
      : `✅ +list is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
