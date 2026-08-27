module.exports = {
  config: {
    name: "phub",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "phub command",
    usage: "/phub",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /phub command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
