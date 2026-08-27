module.exports = {
  config: {
    name: "listbanv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: listbanv2",
    usage: "+listbanv2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +listbanv2 received: ${text}`
      : `✅ +listbanv2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
