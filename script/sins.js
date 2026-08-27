module.exports = {
  config: {
    name: "sins",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: sins",
    usage: "+sins",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +sins received: ${text}`
      : `✅ +sins is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
