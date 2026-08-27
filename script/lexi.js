module.exports = {
  config: {
    name: "lexi",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "lexi command",
    usage: "/lexi",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /lexi command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
