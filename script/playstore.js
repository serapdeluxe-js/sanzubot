module.exports = {
  config: {
    name: "playstore",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "playstore command",
    usage: "/playstore",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /playstore command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
