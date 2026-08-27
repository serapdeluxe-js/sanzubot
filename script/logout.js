module.exports = {
  config: {
    name: "logout",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: logout",
    usage: "+logout",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +logout received: ${text}`
      : `✅ +logout is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
