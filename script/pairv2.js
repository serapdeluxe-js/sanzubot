module.exports = {
  config: {
    name: "pairv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "pairv2 command",
    usage: "/pairv2",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /pairv2 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
