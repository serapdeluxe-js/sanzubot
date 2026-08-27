module.exports = {
  config: {
    name: "rumbledletter",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: rumbledletter",
    usage: "+rumbledletter",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +rumbledletter received: ${text}`
      : `✅ +rumbledletter is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
