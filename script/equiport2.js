module.exports = {
  config: {
    name: "equiport2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "equiport2 command",
    usage: "/equiport2",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /equiport2 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
