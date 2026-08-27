module.exports = {
  config: {
    name: "fbget",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "fbget command",
    usage: "/fbget",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /fbget command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
