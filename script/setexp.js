module.exports = {
  config: {
    name: "setexp",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setexp command",
    usage: "/setexp",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setexp command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
