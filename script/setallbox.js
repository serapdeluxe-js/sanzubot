module.exports = {
  config: {
    name: "setallbox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: setallbox",
    usage: "+setallbox",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +setallbox received: ${text}`
      : `✅ +setallbox is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
