module.exports = {
  config: {
    name: "choose",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "choose command",
    usage: "/choose",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /choose command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
