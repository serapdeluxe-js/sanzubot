module.exports = {
  config: {
    name: "simplehelp",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: simplehelp",
    usage: "+simplehelp",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +simplehelp received: ${text}`
      : `✅ +simplehelp is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
