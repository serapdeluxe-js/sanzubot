module.exports = {
  config: {
    name: "shortcut",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: shortcut",
    usage: "+shortcut",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +shortcut received: ${text}`
      : `✅ +shortcut is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
