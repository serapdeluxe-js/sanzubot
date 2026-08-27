module.exports = {
  config: {
    name: "ban",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "ban command",
    usage: "/ban",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /ban command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
