module.exports = {
  config: {
    name: "tweet-tag",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "tweet-tag command",
    usage: "/tweet-tag",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /tweet-tag command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
