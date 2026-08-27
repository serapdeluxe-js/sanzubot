module.exports = {
  config: {
    name: "married",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "married command",
    usage: "/married",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /married command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
