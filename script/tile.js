module.exports = {
  config: {
    name: "tile",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: tile",
    usage: "+tile",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +tile received: ${text}`
      : `✅ +tile is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
