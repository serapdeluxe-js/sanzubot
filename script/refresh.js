module.exports = {
  config: {
    name: "refresh",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "refresh command",
    usage: "/refresh",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /refresh command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
