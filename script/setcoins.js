module.exports = {
  config: {
    name: "setcoins",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: setcoins",
    usage: "+setcoins",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +setcoins received: ${text}`
      : `✅ +setcoins is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
