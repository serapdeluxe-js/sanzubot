module.exports = {
  config: {
    name: "resetmoney",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "resetmoney command",
    usage: "/resetmoney",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /resetmoney command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
