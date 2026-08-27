module.exports = {
  config: {
    name: "join",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "join command",
    usage: "/join",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /join command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
