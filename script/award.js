module.exports = {
  config: {
    name: "award",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: award",
    usage: "+award",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +award received: ${text}`
      : `✅ +award is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
