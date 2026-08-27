module.exports = {
  config: {
    name: "threadban",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "threadban command",
    usage: "/threadban",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /threadban command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
