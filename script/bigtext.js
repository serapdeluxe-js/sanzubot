module.exports = {
  config: {
    name: "bigtext",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: bigtext",
    usage: "+bigtext",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +bigtext received: ${text}`
      : `✅ +bigtext is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
