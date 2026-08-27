module.exports = {
  config: {
    name: "cardinfo",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "cardinfo command",
    usage: "/cardinfo",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /cardinfo command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
