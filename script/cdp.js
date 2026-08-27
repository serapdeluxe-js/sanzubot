module.exports = {
  config: {
    name: "cdp",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cdp",
    usage: "+cdp",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cdp received: ${text}`
      : `✅ +cdp is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
