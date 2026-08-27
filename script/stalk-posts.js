module.exports = {
  config: {
    name: "stalk-posts",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "stalk-posts command",
    usage: "/stalk-posts",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /stalk-posts command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
