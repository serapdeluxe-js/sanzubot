module.exports = {
  config: {
    name: "rangkings",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "rangkings command",
    usage: "/rangkings",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /rangkings command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
