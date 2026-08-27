module.exports = {
  config: {
    name: "piratekings",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: piratekings",
    usage: "+piratekings",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +piratekings received: ${text}`
      : `✅ +piratekings is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
