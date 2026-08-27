module.exports = {
  config: {
    name: "addtogroup",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: addtogroup",
    usage: "+addtogroup",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +addtogroup received: ${text}`
      : `✅ +addtogroup is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
