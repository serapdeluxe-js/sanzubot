module.exports = {
  config: {
    name: "pairv3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "pairv3 command",
    usage: "/pairv3",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /pairv3 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
