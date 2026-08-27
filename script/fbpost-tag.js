module.exports = {
  config: {
    name: "fbpost-tag",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: fbpost-tag",
    usage: "+fbpost-tag",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +fbpost-tag received: ${text}`
      : `✅ +fbpost-tag is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
