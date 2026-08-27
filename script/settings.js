module.exports = {
  config: {
    name: "settings",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "settings command",
    usage: "/settings",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /settings command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
