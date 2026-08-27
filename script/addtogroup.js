module.exports = {
  config: {
    name: "addtogroup",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "addtogroup command",
    usage: "/addtogroup",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /addtogroup command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
