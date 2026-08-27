module.exports = {
  config: {
    name: "sendnoti",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: sendnoti",
    usage: "+sendnoti",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +sendnoti received: ${text}`
      : `✅ +sendnoti is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
