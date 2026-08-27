module.exports = {
  config: {
    name: "billboard2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "billboard2 command",
    usage: "/billboard2",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /billboard2 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
