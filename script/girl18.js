module.exports = {
  config: {
    name: "girl18",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "girl18 command",
    usage: "/girl18",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /girl18 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
