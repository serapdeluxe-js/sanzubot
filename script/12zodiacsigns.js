module.exports = {
  config: {
    name: "12zodiacsigns",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: 12zodiacsigns",
    usage: "+12zodiacsigns",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +12zodiacsigns received: ${text}`
      : `✅ +12zodiacsigns is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
