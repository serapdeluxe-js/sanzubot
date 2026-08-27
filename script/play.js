module.exports = {
  config: {
    name: "play",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "play command",
    usage: "/play",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /play command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
