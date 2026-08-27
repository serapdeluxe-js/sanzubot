module.exports = {
  config: {
    name: "blackboard",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "blackboard command",
    usage: "/blackboard",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /blackboard command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
