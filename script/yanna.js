module.exports = {
  config: {
    name: "yanna",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "yanna command",
    usage: "/yanna",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /yanna command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
