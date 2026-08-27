module.exports = {
  config: {
    name: "marriedv5",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: marriedv5",
    usage: "+marriedv5",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +marriedv5 received: ${text}`
      : `✅ +marriedv5 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
