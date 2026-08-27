module.exports = {
  config: {
    name: "chi",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "chi command",
    usage: "/chi",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /chi command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
