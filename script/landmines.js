module.exports = {
  config: {
    name: "landmines",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: landmines",
    usage: "+landmines",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +landmines received: ${text}`
      : `✅ +landmines is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
