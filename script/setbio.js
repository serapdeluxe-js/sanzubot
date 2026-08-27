module.exports = {
  config: {
    name: "setbio",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: setbio",
    usage: "+setbio",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +setbio received: ${text}`
      : `✅ +setbio is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
