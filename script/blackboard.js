module.exports = {
  config: {
    name: "blackboard",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: blackboard",
    usage: "+blackboard",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +blackboard received: ${text}`
      : `✅ +blackboard is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
