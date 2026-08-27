module.exports = {
  config: {
    name: "10mm",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "10mm command",
    usage: "/10mm",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /10mm command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
