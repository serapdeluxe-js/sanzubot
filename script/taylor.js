module.exports = {
  config: {
    name: "taylor",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "taylor command",
    usage: "/taylor",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /taylor command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
