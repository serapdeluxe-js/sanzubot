module.exports = {
  config: {
    name: "cardinfov2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "cardinfov2 command",
    usage: "/cardinfov2",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /cardinfov2 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
