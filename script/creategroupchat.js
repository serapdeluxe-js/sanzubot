module.exports = {
  config: {
    name: "creategroupchat",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: creategroupchat",
    usage: "+creategroupchat",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +creategroupchat received: ${text}`
      : `✅ +creategroupchat is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
