module.exports = {
  config: {
    name: "coveralime",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: coveralime",
    usage: "+coveralime",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +coveralime received: ${text}`
      : `✅ +coveralime is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
