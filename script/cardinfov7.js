module.exports = {
  config: {
    name: "cardinfov7",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "cardinfov7 command",
    usage: "/cardinfov7",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /cardinfov7 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
