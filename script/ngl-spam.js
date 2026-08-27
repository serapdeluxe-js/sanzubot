module.exports = {
  config: {
    name: "ngl-spam",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: ngl-spam",
    usage: "+ngl-spam",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +ngl-spam received: ${text}`
      : `✅ +ngl-spam is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
