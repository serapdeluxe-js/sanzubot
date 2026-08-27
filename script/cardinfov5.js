module.exports = {
  config: {
    name: "cardinfov5",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "cardinfov5 command",
    usage: "/cardinfov5",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /cardinfov5 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
