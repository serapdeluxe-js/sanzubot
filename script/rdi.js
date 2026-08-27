module.exports = {
  config: {
    name: "rdi",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: rdi",
    usage: "+rdi",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +rdi received: ${text}`
      : `✅ +rdi is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
