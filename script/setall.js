module.exports = {
  config: {
    name: "setall",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setall command",
    usage: "/setall",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setall command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
