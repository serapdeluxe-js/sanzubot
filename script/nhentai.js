module.exports = {
  config: {
    name: "nhentai",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "nhentai command",
    usage: "/nhentai",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /nhentai command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
