module.exports = {
  config: {
    name: "job",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: job",
    usage: "+job",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +job received: ${text}`
      : `✅ +job is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
