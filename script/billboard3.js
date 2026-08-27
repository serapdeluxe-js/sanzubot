module.exports = {
  config: {
    name: "billboard3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "billboard3 command",
    usage: "/billboard3",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /billboard3 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
