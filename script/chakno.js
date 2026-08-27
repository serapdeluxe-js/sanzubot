module.exports = {
  config: {
    name: "chakno",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "chakno command",
    usage: "/chakno",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /chakno command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
