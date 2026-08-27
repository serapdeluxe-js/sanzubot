module.exports = {
  config: {
    name: "tempmail",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: tempmail",
    usage: "+tempmail",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +tempmail received: ${text}`
      : `✅ +tempmail is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
