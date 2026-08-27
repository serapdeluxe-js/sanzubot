module.exports = {
  config: {
    name: "pin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "pin command",
    usage: "/pin",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /pin command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
