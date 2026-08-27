module.exports = {
  config: {
    name: "pair",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: pair",
    usage: "+pair",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +pair received: ${text}`
      : `✅ +pair is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
