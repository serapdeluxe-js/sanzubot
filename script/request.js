module.exports = {
  config: {
    name: "request",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "request command",
    usage: "/request",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /request command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
