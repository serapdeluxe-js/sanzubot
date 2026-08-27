module.exports = {
  config: {
    name: "ttt",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "ttt command",
    usage: "/ttt",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /ttt command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
