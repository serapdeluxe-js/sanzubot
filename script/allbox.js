module.exports = {
  config: {
    name: "allbox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: allbox",
    usage: "+allbox",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +allbox received: ${text}`
      : `✅ +allbox is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
