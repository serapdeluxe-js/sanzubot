module.exports = {
  config: {
    name: "ip",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: ip",
    usage: "+ip",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +ip received: ${text}`
      : `✅ +ip is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
