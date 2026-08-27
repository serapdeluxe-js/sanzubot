module.exports = {
  config: {
    name: "leniv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "leniv2 command",
    usage: "/leniv2",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /leniv2 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
