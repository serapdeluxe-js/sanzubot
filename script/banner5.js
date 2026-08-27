module.exports = {
  config: {
    name: "banner5",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "banner5 command",
    usage: "/banner5",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /banner5 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
