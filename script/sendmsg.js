module.exports = {
  config: {
    name: "sendmsg",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: sendmsg",
    usage: "+sendmsg",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +sendmsg received: ${text}`
      : `✅ +sendmsg is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
