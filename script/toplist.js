module.exports = {
  config: {
    name: "toplist",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "toplist command",
    usage: "/toplist",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /toplist command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
