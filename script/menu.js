module.exports = {
  config: {
    name: "menu",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "menu command",
    usage: "/menu",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /menu command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
