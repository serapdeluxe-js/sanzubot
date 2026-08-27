module.exports = {
  config: {
    name: "bot-say",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "bot-say command",
    usage: "/bot-say",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /bot-say command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
