module.exports = {
  config: {
    name: "cache",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "cache command",
    usage: "/cache",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /cache command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
