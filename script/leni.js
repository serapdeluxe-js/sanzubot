module.exports = {
  config: {
    name: "leni",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "leni command",
    usage: "/leni",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /leni command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
