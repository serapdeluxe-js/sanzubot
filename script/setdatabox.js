module.exports = {
  config: {
    name: "setdatabox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: setdatabox",
    usage: "+setdatabox",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +setdatabox received: ${text}`
      : `✅ +setdatabox is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
