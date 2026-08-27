module.exports = {
  config: {
    name: "cardinfov3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "cardinfov3 command",
    usage: "/cardinfov3",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /cardinfov3 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
