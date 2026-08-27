module.exports = {
  config: {
    name: "language",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "language command",
    usage: "/language",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /language command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
