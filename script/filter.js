module.exports = {
  config: {
    name: "filter",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "filter command",
    usage: "/filter",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /filter command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
