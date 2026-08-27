module.exports = {
  config: {
    name: "setgroupname",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: setgroupname",
    usage: "+setgroupname",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +setgroupname received: ${text}`
      : `✅ +setgroupname is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
