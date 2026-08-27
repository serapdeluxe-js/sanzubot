module.exports = {
  config: {
    name: "setname",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: setname",
    usage: "+setname",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +setname received: ${text}`
      : `✅ +setname is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
