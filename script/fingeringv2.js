module.exports = {
  config: {
    name: "fingeringv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: fingeringv2",
    usage: "+fingeringv2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +fingeringv2 received: ${text}`
      : `✅ +fingeringv2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
