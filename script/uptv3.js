module.exports = {
  config: {
    name: "uptv3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: uptv3",
    usage: "+uptv3",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +uptv3 received: ${text}`
      : `✅ +uptv3 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
