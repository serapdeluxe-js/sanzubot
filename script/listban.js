module.exports = {
  config: {
    name: "listban",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "listban command",
    usage: "/listban",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /listban command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
