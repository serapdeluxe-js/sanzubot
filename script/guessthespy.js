module.exports = {
  config: {
    name: "guessthespy",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "guessthespy command",
    usage: "/guessthespy",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /guessthespy command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
