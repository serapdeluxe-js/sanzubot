module.exports = {
  config: {
    name: "removebg",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: removebg",
    usage: "+removebg",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +removebg received: ${text}`
      : `✅ +removebg is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
