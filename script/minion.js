module.exports = {
  config: {
    name: "minion",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "minion command",
    usage: "/minion",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /minion command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
