module.exports = {
  config: {
    name: "banner6",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "banner6 command",
    usage: "/banner6",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /banner6 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
