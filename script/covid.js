module.exports = {
  config: {
    name: "covid",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "covid command",
    usage: "/covid",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /covid command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
