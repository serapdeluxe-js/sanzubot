module.exports = {
  config: {
    name: "luckydraw",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: luckydraw",
    usage: "+luckydraw",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +luckydraw received: ${text}`
      : `✅ +luckydraw is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
