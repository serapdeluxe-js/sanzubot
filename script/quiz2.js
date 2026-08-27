module.exports = {
  config: {
    name: "quiz2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "quiz2 command",
    usage: "/quiz2",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /quiz2 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
