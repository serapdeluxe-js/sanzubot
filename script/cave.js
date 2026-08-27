module.exports = {
  config: {
    name: "cave",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "cave command",
    usage: "/cave",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /cave command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
