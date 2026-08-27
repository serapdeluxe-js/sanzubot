module.exports = {
  config: {
    name: "student",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "student command",
    usage: "/student",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /student command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
