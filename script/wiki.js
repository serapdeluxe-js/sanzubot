module.exports = {
  config: {
    name: "wiki",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "wiki command",
    usage: "/wiki",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /wiki command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
