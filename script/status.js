module.exports = {
  config: {
    name: "status",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "status command",
    usage: "/status",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /status command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
