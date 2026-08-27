module.exports = {
  config: {
    name: "grouppic",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "grouppic command",
    usage: "/grouppic",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /grouppic command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
