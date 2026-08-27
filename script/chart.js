module.exports = {
  config: {
    name: "chart",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: chart",
    usage: "+chart",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +chart received: ${text}`
      : `✅ +chart is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
