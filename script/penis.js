module.exports = {
  config: {
    name: "penis",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: penis",
    usage: "+penis",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +penis received: ${text}`
      : `✅ +penis is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
