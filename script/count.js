module.exports = {
  config: {
    name: "count",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "count command",
    usage: "/count",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /count command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
