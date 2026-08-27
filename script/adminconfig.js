module.exports = {
  config: {
    name: "adminconfig",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: adminconfig",
    usage: "+adminconfig",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +adminconfig received: ${text}`
      : `✅ +adminconfig is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
