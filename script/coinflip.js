module.exports = {
  config: {
    name: "coinflip",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "coinflip command",
    usage: "/coinflip",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /coinflip command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
