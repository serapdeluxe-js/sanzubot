module.exports = {
  config: {
    name: "avtwibu3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: avtwibu3",
    usage: "+avtwibu3",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +avtwibu3 received: ${text}`
      : `✅ +avtwibu3 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
