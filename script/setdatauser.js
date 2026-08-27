module.exports = {
  config: {
    name: "setdatauser",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: setdatauser",
    usage: "+setdatauser",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +setdatauser received: ${text}`
      : `✅ +setdatauser is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
