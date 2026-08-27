module.exports = {
  config: {
    name: "offbot",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "offbot command",
    usage: "/offbot",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /offbot command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
