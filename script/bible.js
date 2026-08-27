module.exports = {
  config: {
    name: "bible",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "bible command",
    usage: "/bible",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /bible command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
