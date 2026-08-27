module.exports = {
  config: {
    name: "catsay",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "catsay command",
    usage: "/catsay",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /catsay command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
