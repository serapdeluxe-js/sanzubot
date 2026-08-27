module.exports = {
  config: {
    name: "kiko",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "kiko command",
    usage: "/kiko",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /kiko command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
