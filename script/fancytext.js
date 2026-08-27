module.exports = {
  config: {
    name: "fancytext",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "fancytext command",
    usage: "/fancytext",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /fancytext command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
