module.exports = {
  config: {
    name: "infobox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: infobox",
    usage: "+infobox",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +infobox received: ${text}`
      : `✅ +infobox is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
