module.exports = {
  config: {
    name: "shortlink",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: shortlink",
    usage: "+shortlink",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +shortlink received: ${text}`
      : `✅ +shortlink is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
