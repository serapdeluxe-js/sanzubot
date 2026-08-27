module.exports = {
  config: {
    name: "sins",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "sins command",
    usage: "/sins",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /sins command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
