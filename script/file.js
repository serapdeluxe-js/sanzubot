module.exports = {
  config: {
    name: "file",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "file command",
    usage: "/file",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /file command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
