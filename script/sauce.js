module.exports = {
  config: {
    name: "sauce",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "sauce command",
    usage: "/sauce",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /sauce command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
