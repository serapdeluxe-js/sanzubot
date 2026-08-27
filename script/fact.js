module.exports = {
  config: {
    name: "fact",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "fact command",
    usage: "/fact",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /fact command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
