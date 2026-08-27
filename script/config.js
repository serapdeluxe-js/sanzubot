module.exports = {
  config: {
    name: "config",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "config command",
    usage: "/config",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /config command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
