module.exports = {
  config: {
    name: "avtwibu2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: avtwibu2",
    usage: "+avtwibu2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +avtwibu2 received: ${text}`
      : `✅ +avtwibu2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
