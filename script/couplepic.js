module.exports = {
  config: {
    name: "couplepic",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: couplepic",
    usage: "+couplepic",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +couplepic received: ${text}`
      : `✅ +couplepic is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
