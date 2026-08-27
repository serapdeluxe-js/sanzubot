module.exports = {
  config: {
    name: "setjoin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: setjoin",
    usage: "+setjoin",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +setjoin received: ${text}`
      : `✅ +setjoin is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
