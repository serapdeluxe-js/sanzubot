module.exports = {
  config: {
    name: "spambannopref",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: spambannopref",
    usage: "+spambannopref",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +spambannopref received: ${text}`
      : `✅ +spambannopref is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
