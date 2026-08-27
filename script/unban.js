module.exports = {
  config: {
    name: "unban",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "unban command",
    usage: "/unban",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /unban command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
