module.exports = {
  config: {
    name: "antijoin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "antijoin command",
    usage: "/antijoin",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /antijoin command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
