module.exports = {
  config: {
    name: "listban",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: listban",
    usage: "+listban",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +listban received: ${text}`
      : `✅ +listban is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
