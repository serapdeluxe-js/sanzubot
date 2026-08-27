module.exports = {
  config: {
    name: "halloween",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: halloween",
    usage: "+halloween",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +halloween received: ${text}`
      : `✅ +halloween is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
