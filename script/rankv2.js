module.exports = {
  config: {
    name: "rankv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "rankv2 command",
    usage: "/rankv2",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /rankv2 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
