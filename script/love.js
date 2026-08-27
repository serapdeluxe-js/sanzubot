module.exports = {
  config: {
    name: "love",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "love command",
    usage: "/love",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /love command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
