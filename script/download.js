module.exports = {
  config: {
    name: "download",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: download",
    usage: "+download",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +download received: ${text}`
      : `✅ +download is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
