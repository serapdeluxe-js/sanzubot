module.exports = {
  config: {
    name: "steal",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "steal command",
    usage: "/steal",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /steal command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
