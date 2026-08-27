module.exports = {
  config: {
    name: "user",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: user",
    usage: "+user",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +user received: ${text}`
      : `✅ +user is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
