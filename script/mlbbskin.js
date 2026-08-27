module.exports = {
  config: {
    name: "mlbbskin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "mlbbskin command",
    usage: "/mlbbskin",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /mlbbskin command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
