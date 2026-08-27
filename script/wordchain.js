module.exports = {
  config: {
    name: "wordchain",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: wordchain",
    usage: "+wordchain",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +wordchain received: ${text}`
      : `✅ +wordchain is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
