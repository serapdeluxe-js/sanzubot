module.exports = {
  config: {
    name: "fish",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: fish",
    usage: "+fish",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +fish received: ${text}`
      : `✅ +fish is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
