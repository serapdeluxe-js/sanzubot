module.exports = {
  config: {
    name: "kissv3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: kissv3",
    usage: "+kissv3",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +kissv3 received: ${text}`
      : `✅ +kissv3 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
