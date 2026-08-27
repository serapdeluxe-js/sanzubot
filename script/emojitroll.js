module.exports = {
  config: {
    name: "emojitroll",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: emojitroll",
    usage: "+emojitroll",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +emojitroll received: ${text}`
      : `✅ +emojitroll is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
