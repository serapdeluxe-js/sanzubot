module.exports = {
  config: {
    name: "tiki",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "tiki command",
    usage: "/tiki",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /tiki command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
