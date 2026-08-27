module.exports = {
  config: {
    name: "fishing",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "fishing command",
    usage: "/fishing",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /fishing command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
