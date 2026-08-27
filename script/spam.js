module.exports = {
  config: {
    name: "spam",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "spam command",
    usage: "/spam",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /spam command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
