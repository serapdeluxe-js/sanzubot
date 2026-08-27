module.exports = {
  config: {
    name: "autoleave",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: autoleave",
    usage: "+autoleave",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +autoleave received: ${text}`
      : `✅ +autoleave is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
