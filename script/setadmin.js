module.exports = {
  config: {
    name: "setadmin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: setadmin",
    usage: "+setadmin",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +setadmin received: ${text}`
      : `✅ +setadmin is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
