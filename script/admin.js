module.exports = {
  config: {
    name: "admin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "admin command",
    usage: "/admin",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /admin command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
