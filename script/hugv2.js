module.exports = {
  config: {
    name: "hugv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: hugv2",
    usage: "+hugv2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +hugv2 received: ${text}`
      : `✅ +hugv2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
