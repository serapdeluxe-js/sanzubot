module.exports = {
  config: {
    name: "antimultiplebot",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: antimultiplebot",
    usage: "+antimultiplebot",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +antimultiplebot received: ${text}`
      : `✅ +antimultiplebot is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
