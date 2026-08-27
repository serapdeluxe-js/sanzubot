module.exports = {
  config: {
    name: "admin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: admin",
    usage: "+admin",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +admin received: ${text}`
      : `✅ +admin is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
