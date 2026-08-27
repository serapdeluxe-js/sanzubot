module.exports = {
  config: {
    name: "loto",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "loto command",
    usage: "/loto",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /loto command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
