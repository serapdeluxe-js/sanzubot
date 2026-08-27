module.exports = {
  config: {
    name: "threadoff",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "threadoff command",
    usage: "/threadoff",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /threadoff command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
