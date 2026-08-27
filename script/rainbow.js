module.exports = {
  config: {
    name: "rainbow",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "rainbow command",
    usage: "/rainbow",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /rainbow command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
