module.exports = {
  config: {
    name: "cheems",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "cheems command",
    usage: "/cheems",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /cheems command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
