module.exports = {
  config: {
    name: "cardinfov4",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "cardinfov4 command",
    usage: "/cardinfov4",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /cardinfov4 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
