module.exports = {
  config: {
    name: "caro",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "caro command",
    usage: "/caro",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /caro command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
