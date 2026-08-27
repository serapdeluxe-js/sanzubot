module.exports = {
  config: {
    name: "listfriend",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "listfriend command",
    usage: "/listfriend",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /listfriend command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
