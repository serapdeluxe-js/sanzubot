module.exports = {
  config: {
    name: "playpick",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "playpick command",
    usage: "/playpick",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /playpick command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
