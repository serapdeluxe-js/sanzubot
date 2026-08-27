module.exports = {
  config: {
    name: "pay",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "pay command",
    usage: "/pay",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /pay command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
