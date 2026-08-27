module.exports = {
  config: {
    name: "shop",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "shop command",
    usage: "/shop",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /shop command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
