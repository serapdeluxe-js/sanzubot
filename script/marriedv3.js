module.exports = {
  config: {
    name: "marriedv3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: marriedv3",
    usage: "+marriedv3",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +marriedv3 received: ${text}`
      : `✅ +marriedv3 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
