module.exports = {
  config: {
    name: "daily",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "daily command",
    usage: "/daily",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /daily command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
