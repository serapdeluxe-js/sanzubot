module.exports = {
  config: {
    name: "sendnoti",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "sendnoti command",
    usage: "/sendnoti",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /sendnoti command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
