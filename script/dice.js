module.exports = {
  config: {
    name: "dice",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "dice command",
    usage: "/dice",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /dice command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
