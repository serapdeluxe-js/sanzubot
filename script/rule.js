module.exports = {
  config: {
    name: "rule",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "rule command",
    usage: "/rule",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /rule command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
