module.exports = {
  config: {
    name: "poll",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "poll command",
    usage: "/poll",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /poll command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
