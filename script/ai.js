module.exports = {
  config: {
    name: "ai",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "ai command",
    usage: "/ai",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /ai command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
