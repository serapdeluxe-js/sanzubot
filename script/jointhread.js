module.exports = {
  config: {
    name: "jointhread",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "jointhread command",
    usage: "/jointhread",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /jointhread command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
