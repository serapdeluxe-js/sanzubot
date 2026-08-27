module.exports = {
  config: {
    name: "cardinfo-tag",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "cardinfo-tag command",
    usage: "/cardinfo-tag",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /cardinfo-tag command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
