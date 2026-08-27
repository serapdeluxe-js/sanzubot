module.exports = {
  config: {
    name: "sleep",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "sleep command",
    usage: "/sleep",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /sleep command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
