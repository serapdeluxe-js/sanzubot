module.exports = {
  config: {
    name: "biden",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: biden",
    usage: "+biden",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +biden received: ${text}`
      : `✅ +biden is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
