module.exports = {
  config: {
    name: "cmd",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "cmd command",
    usage: "/cmd",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /cmd command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
