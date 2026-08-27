module.exports = {
  config: {
    name: "tableelements",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: tableelements",
    usage: "+tableelements",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +tableelements received: ${text}`
      : `✅ +tableelements is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
