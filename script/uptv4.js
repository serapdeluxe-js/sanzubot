module.exports = {
  config: {
    name: "uptv4",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: uptv4",
    usage: "+uptv4",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +uptv4 received: ${text}`
      : `✅ +uptv4 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
