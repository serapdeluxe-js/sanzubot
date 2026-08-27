module.exports = {
  config: {
    name: "uptvip",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "uptvip command",
    usage: "/uptvip",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /uptvip command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
