module.exports = {
  config: {
    name: "movie",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "movie command",
    usage: "/movie",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /movie command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
