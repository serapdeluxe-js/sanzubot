module.exports = {
  config: {
    name: "cardid",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "cardid command",
    usage: "/cardid",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /cardid command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
