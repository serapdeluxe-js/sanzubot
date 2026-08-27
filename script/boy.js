module.exports = {
  config: {
    name: "boy",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "boy command",
    usage: "/boy",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /boy command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
