module.exports = {
  config: {
    name: "resetcurrency",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "resetcurrency command",
    usage: "/resetcurrency",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /resetcurrency command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
