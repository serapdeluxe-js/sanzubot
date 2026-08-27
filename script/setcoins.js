module.exports = {
  config: {
    name: "setcoins",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setcoins command",
    usage: "/setcoins",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setcoins command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
