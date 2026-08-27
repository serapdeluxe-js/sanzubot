module.exports = {
  config: {
    name: "cmd",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cmd",
    usage: "+cmd",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cmd received: ${text}`
      : `✅ +cmd is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
