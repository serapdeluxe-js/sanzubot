module.exports = {
  config: {
    name: "tagadmin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: tagadmin",
    usage: "+tagadmin",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +tagadmin received: ${text}`
      : `✅ +tagadmin is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
