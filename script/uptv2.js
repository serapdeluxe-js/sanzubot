module.exports = {
  config: {
    name: "uptv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: uptv2",
    usage: "+uptv2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +uptv2 received: ${text}`
      : `✅ +uptv2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
