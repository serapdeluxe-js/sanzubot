module.exports = {
  config: {
    name: "stk",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: stk",
    usage: "+stk",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +stk received: ${text}`
      : `✅ +stk is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
