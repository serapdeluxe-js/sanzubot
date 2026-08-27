module.exports = {
  config: {
    name: "yes",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: yes",
    usage: "+yes",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +yes received: ${text}`
      : `✅ +yes is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
