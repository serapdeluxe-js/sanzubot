module.exports = {
  config: {
    name: "girlnude",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: girlnude",
    usage: "+girlnude",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +girlnude received: ${text}`
      : `✅ +girlnude is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
