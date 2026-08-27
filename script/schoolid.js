module.exports = {
  config: {
    name: "schoolid",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: schoolid",
    usage: "+schoolid",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +schoolid received: ${text}`
      : `✅ +schoolid is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
