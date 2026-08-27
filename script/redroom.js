module.exports = {
  config: {
    name: "redroom",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "redroom command",
    usage: "/redroom",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /redroom command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
