module.exports = {
  config: {
    name: "cony",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cony",
    usage: "+cony",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cony received: ${text}`
      : `✅ +cony is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
