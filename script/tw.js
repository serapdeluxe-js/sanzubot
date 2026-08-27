module.exports = {
  config: {
    name: "tw",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "tw command",
    usage: "/tw",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /tw command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
