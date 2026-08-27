module.exports = {
  config: {
    name: "top",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "top command",
    usage: "/top",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /top command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
