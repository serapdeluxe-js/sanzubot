module.exports = {
  config: {
    name: "flop",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "flop command",
    usage: "/flop",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /flop command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
