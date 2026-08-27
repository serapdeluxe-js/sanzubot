module.exports = {
  config: {
    name: "quiz",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "quiz command",
    usage: "/quiz",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /quiz command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
