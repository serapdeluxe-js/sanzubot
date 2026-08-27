module.exports = {
  config: {
    name: "file",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: file",
    usage: "+file",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +file received: ${text}`
      : `✅ +file is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
