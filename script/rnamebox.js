module.exports = {
  config: {
    name: "rnamebox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: rnamebox",
    usage: "+rnamebox",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +rnamebox received: ${text}`
      : `✅ +rnamebox is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
