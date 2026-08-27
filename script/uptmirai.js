module.exports = {
  config: {
    name: "uptmirai",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: uptmirai",
    usage: "+uptmirai",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +uptmirai received: ${text}`
      : `✅ +uptmirai is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
