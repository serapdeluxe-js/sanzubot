module.exports = {
  config: {
    name: "autosend",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: autosend",
    usage: "+autosend",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +autosend received: ${text}`
      : `✅ +autosend is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
