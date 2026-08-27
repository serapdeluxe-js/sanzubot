module.exports = {
  config: {
    name: "shortlink",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "shortlink command",
    usage: "/shortlink",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /shortlink command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
