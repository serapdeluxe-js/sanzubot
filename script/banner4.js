module.exports = {
  config: {
    name: "banner4",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "banner4 command",
    usage: "/banner4",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /banner4 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
