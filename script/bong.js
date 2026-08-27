module.exports = {
  config: {
    name: "bong",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "bong command",
    usage: "/bong",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /bong command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
