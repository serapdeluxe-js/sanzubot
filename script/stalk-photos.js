module.exports = {
  config: {
    name: "stalk-photos",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "stalk-photos command",
    usage: "/stalk-photos",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /stalk-photos command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
