module.exports = {
  config: {
    name: "idst",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: idst",
    usage: "+idst",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +idst received: ${text}`
      : `✅ +idst is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
