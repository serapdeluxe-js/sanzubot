module.exports = {
  config: {
    name: "malnews",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "malnews command",
    usage: "/malnews",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /malnews command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
