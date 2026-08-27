module.exports = {
  config: {
    name: "rank",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "rank command",
    usage: "/rank",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /rank command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
