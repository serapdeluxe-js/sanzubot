module.exports = {
  config: {
    name: "resend",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: resend",
    usage: "+resend",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +resend received: ${text}`
      : `✅ +resend is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
