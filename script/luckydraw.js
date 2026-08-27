module.exports = {
  config: {
    name: "luckydraw",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "luckydraw command",
    usage: "/luckydraw",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /luckydraw command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
