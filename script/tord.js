module.exports = {
  config: {
    name: "tord",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "tord command",
    usage: "/tord",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /tord command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
