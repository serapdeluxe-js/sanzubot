module.exports = {
  config: {
    name: "tempmail",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "tempmail command",
    usage: "/tempmail",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /tempmail command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
