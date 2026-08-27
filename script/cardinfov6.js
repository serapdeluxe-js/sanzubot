module.exports = {
  config: {
    name: "cardinfov6",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "cardinfov6 command",
    usage: "/cardinfov6",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /cardinfov6 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
