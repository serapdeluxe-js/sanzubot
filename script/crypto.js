module.exports = {
  config: {
    name: "crypto",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "crypto command",
    usage: "/crypto",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /crypto command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
