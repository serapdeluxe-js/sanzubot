module.exports = {
  config: {
    name: "petmonsters",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: petmonsters",
    usage: "+petmonsters",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +petmonsters received: ${text}`
      : `✅ +petmonsters is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
