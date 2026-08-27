module.exports = {
  config: {
    name: "giveaway",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "giveaway command",
    usage: "/giveaway",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /giveaway command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
