module.exports = {
  config: {
    name: "war",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: war",
    usage: "+war",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +war received: ${text}`
      : `✅ +war is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
