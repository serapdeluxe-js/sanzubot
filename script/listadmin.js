module.exports = {
  config: {
    name: "listadmin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: listadmin",
    usage: "+listadmin",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +listadmin received: ${text}`
      : `✅ +listadmin is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
