module.exports = {
  config: {
    name: "tweet",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "tweet command",
    usage: "/tweet",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /tweet command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
