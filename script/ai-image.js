module.exports = {
  config: {
    name: "ai-image",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "ai-image command",
    usage: "/ai-image",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /ai-image command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
