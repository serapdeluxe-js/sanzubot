module.exports = {
  config: {
    name: "xavier",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "xavier command",
    usage: "/xavier",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /xavier command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
