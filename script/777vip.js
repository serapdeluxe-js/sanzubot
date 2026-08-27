module.exports = {
  config: {
    name: "777vip",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "777vip command",
    usage: "/777vip",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /777vip command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
