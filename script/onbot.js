module.exports = {
  config: {
    name: "onbot",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "onbot command",
    usage: "/onbot",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /onbot command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
