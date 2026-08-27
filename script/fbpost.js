module.exports = {
  config: {
    name: "fbpost",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "fbpost command",
    usage: "/fbpost",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /fbpost command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
