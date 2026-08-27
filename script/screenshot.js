module.exports = {
  config: {
    name: "screenshot",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: screenshot",
    usage: "+screenshot",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +screenshot received: ${text}`
      : `✅ +screenshot is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
