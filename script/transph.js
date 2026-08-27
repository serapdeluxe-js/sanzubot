module.exports = {
  config: {
    name: "transph",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "transph command",
    usage: "/transph",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /transph command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
