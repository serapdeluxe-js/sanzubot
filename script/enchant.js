module.exports = {
  config: {
    name: "enchant",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "enchant command",
    usage: "/enchant",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /enchant command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
