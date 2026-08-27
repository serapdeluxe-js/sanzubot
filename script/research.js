module.exports = {
  config: {
    name: "research",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "research command",
    usage: "/research",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /research command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
