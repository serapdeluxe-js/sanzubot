module.exports = {
  config: {
    name: "autoreset",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "autoreset command",
    usage: "/autoreset",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /autoreset command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
