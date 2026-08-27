module.exports = {
  config: {
    name: "playvideo",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "playvideo command",
    usage: "/playvideo",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /playvideo command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
