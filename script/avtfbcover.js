module.exports = {
  config: {
    name: "avtfbcover",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: avtfbcover",
    usage: "+avtfbcover",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +avtfbcover received: ${text}`
      : `✅ +avtfbcover is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
