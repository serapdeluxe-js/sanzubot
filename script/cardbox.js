module.exports = {
  config: {
    name: "cardbox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "cardbox command",
    usage: "/cardbox",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /cardbox command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
