module.exports = {
  config: {
    name: "autoseen",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: autoseen",
    usage: "+autoseen",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +autoseen received: ${text}`
      : `✅ +autoseen is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
