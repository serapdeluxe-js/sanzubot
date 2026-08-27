module.exports = {
  config: {
    name: "rankv3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "rankv3 command",
    usage: "/rankv3",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /rankv3 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
