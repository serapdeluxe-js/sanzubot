module.exports = {
  config: {
    name: "girl2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "girl2 command",
    usage: "/girl2",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /girl2 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
