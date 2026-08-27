module.exports = {
  config: {
    name: "studentv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: studentv2",
    usage: "+studentv2",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +studentv2 received: ${text}`
      : `✅ +studentv2 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
