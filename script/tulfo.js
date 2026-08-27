module.exports = {
  config: {
    name: "tulfo",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "tulfo command",
    usage: "/tulfo",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /tulfo command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
