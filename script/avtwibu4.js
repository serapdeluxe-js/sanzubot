module.exports = {
  config: {
    name: "avtwibu4",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: avtwibu4",
    usage: "+avtwibu4",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +avtwibu4 received: ${text}`
      : `✅ +avtwibu4 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
