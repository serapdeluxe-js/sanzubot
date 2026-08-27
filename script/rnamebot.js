module.exports = {
  config: {
    name: "rnamebot",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "rnamebot command",
    usage: "/rnamebot",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /rnamebot command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
