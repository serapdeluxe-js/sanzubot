module.exports = {
  config: {
    name: "obama",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: obama",
    usage: "+obama",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +obama received: ${text}`
      : `✅ +obama is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
