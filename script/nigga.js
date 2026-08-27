module.exports = {
  config: {
    name: "nigga",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "nigga command",
    usage: "/nigga",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /nigga command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
