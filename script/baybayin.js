module.exports = {
  config: {
    name: "baybayin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "baybayin command",
    usage: "/baybayin",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /baybayin command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
