module.exports = {
  config: {
    name: "gagstock",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: gagstock",
    usage: "+gagstock",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +gagstock received: ${text}`
      : `✅ +gagstock is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
