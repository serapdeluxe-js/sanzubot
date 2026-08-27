module.exports = {
  config: {
    name: "bio",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "bio command",
    usage: "/bio",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /bio command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
