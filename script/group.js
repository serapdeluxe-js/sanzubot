module.exports = {
  config: {
    name: "group",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: group",
    usage: "+group",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +group received: ${text}`
      : `✅ +group is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
