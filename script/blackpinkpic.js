module.exports = {
  config: {
    name: "blackpinkpic",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: blackpinkpic",
    usage: "+blackpinkpic",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +blackpinkpic received: ${text}`
      : `✅ +blackpinkpic is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
