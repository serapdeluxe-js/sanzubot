module.exports = {
  config: {
    name: "batslap",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: batslap",
    usage: "+batslap",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +batslap received: ${text}`
      : `✅ +batslap is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
