module.exports = {
  config: {
    name: "12tenses",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "12tenses command",
    usage: "/12tenses",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /12tenses command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
