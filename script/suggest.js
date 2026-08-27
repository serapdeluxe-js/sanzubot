module.exports = {
  config: {
    name: "suggest",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "suggest command",
    usage: "/suggest",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /suggest command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
