module.exports = {
  config: {
    name: "dictionary",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "dictionary command",
    usage: "/dictionary",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /dictionary command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
