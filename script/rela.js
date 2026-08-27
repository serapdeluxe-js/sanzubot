module.exports = {
  config: {
    name: "rela",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: rela",
    usage: "+rela",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +rela received: ${text}`
      : `✅ +rela is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
