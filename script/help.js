module.exports = {
  config: {
    name: "help",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "help command",
    usage: "/help",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /help command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
