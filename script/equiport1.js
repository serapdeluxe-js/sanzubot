module.exports = {
  config: {
    name: "equiport1",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "equiport1 command",
    usage: "/equiport1",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /equiport1 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
