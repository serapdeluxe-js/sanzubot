module.exports = {
  config: {
    name: "getlink",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: getlink",
    usage: "+getlink",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +getlink received: ${text}`
      : `✅ +getlink is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
