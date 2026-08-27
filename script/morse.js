module.exports = {
  config: {
    name: "morse",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "morse command",
    usage: "/morse",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /morse command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
