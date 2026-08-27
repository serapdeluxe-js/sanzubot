module.exports = {
  config: {
    name: "kiss",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "kiss command",
    usage: "/kiss",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /kiss command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
