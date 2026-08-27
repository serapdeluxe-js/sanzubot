module.exports = {
  config: {
    name: "kord",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: kord",
    usage: "+kord",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +kord received: ${text}`
      : `✅ +kord is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
