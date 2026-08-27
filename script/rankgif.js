module.exports = {
  config: {
    name: "rankgif",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "rankgif command",
    usage: "/rankgif",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /rankgif command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
