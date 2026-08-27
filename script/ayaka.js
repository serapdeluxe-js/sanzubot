module.exports = {
  config: {
    name: "ayaka",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "ayaka command",
    usage: "/ayaka",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /ayaka command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
