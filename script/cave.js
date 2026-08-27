module.exports = {
  config: {
    name: "cave",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: cave",
    usage: "+cave",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +cave received: ${text}`
      : `✅ +cave is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
