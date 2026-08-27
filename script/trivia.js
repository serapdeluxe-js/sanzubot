module.exports = {
  config: {
    name: "trivia",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "trivia command",
    usage: "/trivia",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /trivia command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
