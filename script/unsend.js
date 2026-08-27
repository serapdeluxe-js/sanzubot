module.exports = {
  config: {
    name: "unsend",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "unsend command",
    usage: "/unsend",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /unsend command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
