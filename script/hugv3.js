module.exports = {
  config: {
    name: "hugv3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: hugv3",
    usage: "+hugv3",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +hugv3 received: ${text}`
      : `✅ +hugv3 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
