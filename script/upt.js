module.exports = {
  config: {
    name: "upt",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "upt command",
    usage: "/upt",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /upt command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
