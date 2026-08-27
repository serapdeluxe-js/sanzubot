module.exports = {
  config: {
    name: "setexp",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: setexp",
    usage: "+setexp",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +setexp received: ${text}`
      : `✅ +setexp is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
