module.exports = {
  config: {
    name: "banner3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "banner3 command",
    usage: "/banner3",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /banner3 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
