module.exports = {
  config: {
    name: "setusage",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: setusage",
    usage: "+setusage",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +setusage received: ${text}`
      : `✅ +setusage is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
