module.exports = {
  config: {
    name: "marriedv6",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: marriedv6",
    usage: "+marriedv6",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +marriedv6 received: ${text}`
      : `✅ +marriedv6 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
