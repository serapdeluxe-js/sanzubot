module.exports = {
  config: {
    name: "stalk-tag",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "stalk-tag command",
    usage: "/stalk-tag",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /stalk-tag command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
