module.exports = {
  config: {
    name: "helpall",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "helpall command",
    usage: "/helpall",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /helpall command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
