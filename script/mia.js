module.exports = {
  config: {
    name: "mia",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "mia command",
    usage: "/mia",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /mia command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
