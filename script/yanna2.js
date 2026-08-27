module.exports = {
  config: {
    name: "yanna2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "yanna2 command",
    usage: "/yanna2",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /yanna2 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
