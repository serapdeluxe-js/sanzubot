module.exports = {
  config: {
    name: "grouppic",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: grouppic",
    usage: "+grouppic",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +grouppic received: ${text}`
      : `✅ +grouppic is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
