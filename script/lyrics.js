module.exports = {
  config: {
    name: "lyrics",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "lyrics command",
    usage: "/lyrics",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /lyrics command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
