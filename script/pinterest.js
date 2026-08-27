module.exports = {
  config: {
    name: "pinterest",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "pinterest command",
    usage: "/pinterest",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /pinterest command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
