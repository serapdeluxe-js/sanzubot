module.exports = {
  config: {
    name: "refresh",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: refresh",
    usage: "+refresh",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +refresh received: ${text}`
      : `✅ +refresh is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
