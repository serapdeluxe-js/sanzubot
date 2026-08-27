module.exports = {
  config: {
    name: "avtidlist",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: avtidlist",
    usage: "+avtidlist",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +avtidlist received: ${text}`
      : `✅ +avtidlist is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
