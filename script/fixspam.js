module.exports = {
  config: {
    name: "fixspam",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: fixspam",
    usage: "+fixspam",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +fixspam received: ${text}`
      : `✅ +fixspam is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
