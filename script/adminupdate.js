module.exports = {
  config: {
    name: "adminupdate",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: adminupdate",
    usage: "+adminupdate",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +adminupdate received: ${text}`
      : `✅ +adminupdate is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
