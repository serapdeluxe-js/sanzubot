module.exports = {
  config: {
    name: "ayaka",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: ayaka",
    usage: "+ayaka",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +ayaka received: ${text}`
      : `✅ +ayaka is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
