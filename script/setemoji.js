module.exports = {
  config: {
    name: "setemoji",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setemoji command",
    usage: "/setemoji",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setemoji command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
