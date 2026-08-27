module.exports = {
  config: {
    name: "fbavt",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: fbavt",
    usage: "+fbavt",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +fbavt received: ${text}`
      : `✅ +fbavt is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
