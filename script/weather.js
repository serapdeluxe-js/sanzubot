module.exports = {
  config: {
    name: "weather",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "weather command",
    usage: "/weather",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /weather command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
