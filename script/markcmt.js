module.exports = {
  config: {
    name: "markcmt",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "markcmt command",
    usage: "/markcmt",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /markcmt command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
