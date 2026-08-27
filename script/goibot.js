module.exports = {
  config: {
    name: "goibot",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: goibot",
    usage: "+goibot",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +goibot received: ${text}`
      : `✅ +goibot is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
