module.exports = {
  config: {
    name: "joji",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "joji command",
    usage: "/joji",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /joji command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
