module.exports = {
  config: {
    name: "capwall",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: capwall",
    usage: "+capwall",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +capwall received: ${text}`
      : `✅ +capwall is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
