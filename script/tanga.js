module.exports = {
  config: {
    name: "tanga",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "tanga command",
    usage: "/tanga",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /tanga command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
