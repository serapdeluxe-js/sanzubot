module.exports = {
  config: {
    name: "family",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "family command",
    usage: "/family",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /family command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
