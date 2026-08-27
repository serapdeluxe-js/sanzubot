module.exports = {
  config: {
    name: "6mui",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "6mui command",
    usage: "/6mui",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /6mui command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
