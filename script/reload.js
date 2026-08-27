module.exports = {
  config: {
    name: "reload",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "reload command",
    usage: "/reload",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /reload command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
