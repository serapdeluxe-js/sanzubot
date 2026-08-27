module.exports = {
  config: {
    name: "kord",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "kord command",
    usage: "/kord",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /kord command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
