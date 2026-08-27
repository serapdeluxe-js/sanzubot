module.exports = {
  config: {
    name: "github",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "github command",
    usage: "/github",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /github command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
