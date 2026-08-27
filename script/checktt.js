module.exports = {
  config: {
    name: "checktt",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "checktt command",
    usage: "/checktt",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /checktt command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
