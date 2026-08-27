module.exports = {
  config: {
    name: "fuid",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: fuid",
    usage: "+fuid",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +fuid received: ${text}`
      : `✅ +fuid is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
