module.exports = {
  config: {
    name: "advice",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "advice command",
    usage: "/advice",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /advice command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
