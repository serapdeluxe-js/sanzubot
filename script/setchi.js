module.exports = {
  config: {
    name: "setchi",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setchi command",
    usage: "/setchi",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setchi command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
