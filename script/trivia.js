module.exports = {
  config: {
    name: "trivia",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: trivia",
    usage: "+trivia",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +trivia received: ${text}`
      : `✅ +trivia is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
