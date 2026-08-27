module.exports = {
  config: {
    name: "pairv4",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "pairv4 command",
    usage: "/pairv4",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /pairv4 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
