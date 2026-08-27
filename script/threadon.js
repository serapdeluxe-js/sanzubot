module.exports = {
  config: {
    name: "threadon",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "threadon command",
    usage: "/threadon",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /threadon command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
