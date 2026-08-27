module.exports = {
  config: {
    name: "obama",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "obama command",
    usage: "/obama",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /obama command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
