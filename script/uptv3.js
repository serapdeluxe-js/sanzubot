module.exports = {
  config: {
    name: "uptv3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "uptv3 command",
    usage: "/uptv3",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /uptv3 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
